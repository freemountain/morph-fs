#!/usr/bin/env sh
set -e

standard_version_cmd="./node_modules/.bin/standard-version"
current_branch=$(git rev-parse --abbrev-ref HEAD)
git_push_cmd="git push --follow-tags origin $current_branch"
npm_publish_cmd="npm publish"


case $current_branch in
  "release/"*)  standard_version_cmd="$standard_version_cmd --prerelease beta"
                npm_publish_cmd="$npm_publish_cmd --tag beta";;
esac

args=" $* "
if [ -z "${args##*--dry-run*}" ]; then
   standard_version_cmd="$standard_version_cmd --dry-run"
fi

echo "> $standard_version_cmd " 1>&2;
$standard_version_cmd

echo "> $git_push_cmd " 1>&2;
[ -z "${args##*--dry-run*}" ] || $git_push_cmd
echo "> $npm_publish_cmd " 1>&2;
[ -z "${args##*--dry-run*}" ] || $npm_publish_cmd
