#!/usr/bin/env bash
# Propagation + HTTPS checks for Evidence E6. Run on your laptop:  bash deploy/verify_dns.sh yourdomain.tech
D="${1:-innovexfest.tech}"
echo "== NS ==";            dig NS "$D" +short
echo "== A (Cloudflare IPs when proxied) =="; dig A "$D" +short
echo "== A via 8.8.8.8 =="; dig @8.8.8.8 A "$D" +short
echo "== HTTP -> HTTPS =="; curl -sI "http://$D" | head -3
echo "== www -> root ==";   curl -sI "https://www.$D" | grep -iE "^(HTTP|location)"
echo "== HTTPS ==";         curl -sI "https://$D" | grep -iE "^(HTTP|server|cf-cache-status)"
echo "Also check: https://www.whatsmydns.net/#NS/$D  and  https://www.ssllabs.com/ssltest/analyze.html?d=$D"
