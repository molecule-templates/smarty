#!/bin/sh
set -ex

start_time=$(date +%s)

pwd

rm -rf dist

npm install --registry=http://registry.npm.baidu-int.com
npm run build

sh bin/tpl_build.sh
