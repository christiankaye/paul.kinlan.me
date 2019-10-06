#! /bin/bash

yum install -y wget

npm install

sh install-hugo.sh

cp -r node_modules/comlink static/javascripts/
cp -r node_modules/pinch-zoom-element/dist static/javascripts/pinch-zoom-element

mkdir data/
curl https://webmention.io/api/mentions.json?token=$WEBMENTION > data/mentions.json

./hugo -d dist

npx rollup -c rollup.config.js
npx webmention dist/index.xml --limit 1 --send
