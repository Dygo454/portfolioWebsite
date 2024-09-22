#!/bin/sh
sleep 5s
git fetch
git pull
sudo systemctl restart apache2
