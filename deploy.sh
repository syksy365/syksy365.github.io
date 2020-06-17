#!/usr/bin/env sh

set -e

yarn docs:build

cd docs/.vuepress/dist

echo 'syksy.site' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://${token}@github.com/syksy365/syksy365.github.io.git master

cd -