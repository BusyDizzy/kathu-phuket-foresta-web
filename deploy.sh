#!/usr/bin/env bash

set -e

# 1. Очистить старый dist
rm -rf docs/.vitepress/dist

# 2. Построить сайт
npm run docs:build

# 3. CNAME
echo 'kathuphuketforesta.com' > docs/.vitepress/dist/CNAME

# 4. Деплой
cd docs/.vitepress/dist

git init
git add -A
git commit -m "Deploy"

git branch -M gh-pages
git remote add origin git@github.com:BusyDizzy/kathu-phuket-foresta-web.git
git push -f origin gh-pages

cd -