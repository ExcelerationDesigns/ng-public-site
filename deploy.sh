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

IN="$TRAVIS_REPO_SLUG"
set -- "$IN"
IFS="/"; declare -a Array=($*)
shopt -s extglob
echo "ng build --base-href=\"/${Array[1]}/"

rev=$(git rev-parse --short HEAD)

ng github-pages:deploy --gh-token=$GH_TOKEN --base-href="/${Array[1]}/" --prod --message="release: commit ${rev} pushed to production."

echo "release: commit ${rev} pushed to production."
git log


echo npm config get prefix
cd npm config get prefix

echo "list dir"
ls -als


# echo "example.com" > CNAME




