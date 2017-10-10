cd $BUDDYBUILD_WORKSPACE
npm i -g exp
exp login -u notbrent-tester -p pass123
yarn
node set-random-slug.js
exp publish
