#!/usr/bin/env bash
# Build the static site locally and upload it to the VPS.
# Usage (from the project root):  DOMAIN=yourdomain.tech SERVER=innovex@<IP> bash deploy/deploy.sh
set -euo pipefail
DOMAIN="${DOMAIN:-innovexfest.tech}"
SERVER="${SERVER:?Set SERVER=user@ip}"

npm ci
npm run build
python3 tools/check_seo.py --site out          # stop the deploy if the SEO check fails
rsync -avz --delete out/ "${SERVER}:/var/www/${DOMAIN}/"
echo "Deployed to https://${DOMAIN}/ — purge Cloudflare cache if you changed CSS/JS file names."
