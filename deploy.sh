#!/bin/bash

set -e

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi


if [ "$TRAVIS_PULL_REQUEST" != false ]
then
  echo "This commit was made against the $TRAVIS_PULL_REQUEST_BRANCH and not the master! No deploy!"
  exit 0
fi

if [ "$1" != true ]
then
  echo "Detected Angular flag, enabling Angular features"
  IN="$TRAVIS_REPO_SLUG"
  set -- "$IN"
  IFS="/"; declare -a Array=($*)
  echo "${Array[@]}"
  echo "${Array[0]}"
  echo "${Array[1]}"
  shopt -s extglob
  echo "ng build --base-href=\"/${Array[1]}/"
  ng build --base-href="/${Array[1]}/" --aot --prod
fi

echo "set remote"
git remote -v
git remote rm origin
git remote add origin "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"

git remote -v

echo "fetch latest"
git fetch
git status

echo "checkout master"
git checkout master
git branch --set-upstream-to=origin/master master

git pull
git status

echo "checkout gh pages"
git checkout gh-pages
git status

echo "list dir"
ls -als

echo "remove all"
rm -r !(|.|..|.git|.gitignore|dist|node_modules|assets)

echo "list dir"
ls -als

echo "cd to dist"
cd dist

echo "list dir"
ls -als

echo "move files dist"
cp -r * ..

cd ..

ls -als

echo "touch all files"
touch .

if [ "$1" != true ]
then
  echo "make a 404"
  cp index.html 404.html
fi

echo "add all files"
git add .
git status

rev=$(git rev-parse --short HEAD)
git commit -m "release: commit ${rev} pushed to production."
echo "release: commit ${rev} pushed to production."

echo "setting upstream"
git push --set-upstream origin gh-pages
git status

echo "pushing to repo"
git push -f
git log



# echo "example.com" > CNAME



