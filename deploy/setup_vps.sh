#!/usr/bin/env bash
# =====================================================================
# INNOVEX 2027 — VPS setup for the Next.js static export
# Ubuntu 24.04 (DigitalOcean / Lightsail / Vultr). Milestone I, item 8.
#
# Run ON THE SERVER as a sudo user (not root):
#   scp -r deploy innovex@<IP>:~
#   ssh innovex@<IP>
#   DOMAIN=yourdomain.tech EMAIL=you@example.com bash deploy/setup_vps.sh 2>&1 | tee setup_log.txt
#
# setup_log.txt is your SSH terminal-log evidence.
# Before Certbot runs, the Cloudflare A record must be "DNS only" (grey cloud).
# Afterwards switch it to "Proxied" and set SSL/TLS to Full (strict).
# =====================================================================
set -euo pipefail

DOMAIN="${DOMAIN:-innovexfest.tech}"
EMAIL="${EMAIL:-admin@example.com}"
WEBROOT="/var/www/${DOMAIN}"
RUN_CERTBOT="${RUN_CERTBOT:-yes}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

step() { echo; echo "==== [$(date '+%H:%M:%S')] $* ===="; }

step "1/6 System update"
sudo apt-get update -y && sudo DEBIAN_FRONTEND=noninteractive apt-get upgrade -y

step "2/6 Install Nginx, UFW, rsync"
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y nginx ufw rsync curl
nginx -v

step "3/6 Firewall"
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status verbose

step "4/6 Web root + placeholder page"
sudo mkdir -p "${WEBROOT}"
sudo chown -R "$USER":www-data "${WEBROOT}"
if [ ! -f "${WEBROOT}/index.html" ]; then
  echo "<!doctype html><title>INNOVEX – deploying</title><p>Server ready. Run deploy/deploy.sh from your laptop.</p>" > "${WEBROOT}/index.html"
fi

step "5/6 Nginx server block"
sed "s/__DOMAIN__/${DOMAIN}/g" "${SCRIPT_DIR}/nginx/innovex.conf" | sudo tee /etc/nginx/sites-available/${DOMAIN} >/dev/null
sudo ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/${DOMAIN}
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

step "6/6 Let's Encrypt SSL"
if [ "${RUN_CERTBOT}" = "yes" ]; then
  sudo apt-get install -y certbot python3-certbot-nginx
  sudo certbot --nginx -d "${DOMAIN}" -d "www.${DOMAIN}" --redirect --agree-tos -m "${EMAIL}" --non-interactive
  sudo certbot renew --dry-run
  systemctl list-timers | grep -i certbot || true
else
  echo "Skipped (RUN_CERTBOT=${RUN_CERTBOT})."
fi

echo; echo "Done. Next: from your laptop run  DOMAIN=${DOMAIN} SERVER=${USER}@<IP> bash deploy/deploy.sh"
