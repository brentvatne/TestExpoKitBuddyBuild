const fs = require('fs');
const uuid = require('./uuid');

const appJson = JSON.parse(fs.readFileSync('app.json'));
const originalSlug = appJson.expo.slug;
const newSlug = `${appJson.expo.slug}-${uuid()}`;

// Update slug in app.json
appJson.expo.slug = newSlug;
fs.writeFileSync('app.json', JSON.stringify(appJson));
console.log(`Updated slug to ${newSlug}`);

// Update url in EXShell.plist
const exShellPlistPath = 'ios/testexpokitbuddybuild/Supporting/EXShell.plist';
let exShellPlist = fs.readFileSync(exShellPlistPath).toString();
exShellPlist = exShellPlist.replace(`/${originalSlug}`, `/${newSlug}`);
fs.writeFileSync(exShellPlistPath, exShellPlist);
console.log(`Updated EXShell.plist`);

// Update url in MainActivity
const mainActivityPath = 'android/app/src/main/java/io/expo/buddybuildexample/MainActivity.java';
let mainActivity = fs.readFileSync(mainActivityPath).toString();
mainActivity = mainActivity.replace(`/${originalSlug}`, `/${newSlug}`);
fs.writeFileSync(mainActivityPath, mainActivity);
console.log(`Updated MainActivity.java`);
