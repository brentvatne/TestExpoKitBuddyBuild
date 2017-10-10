const fs = require('fs');
const uuid = require('./uuid');
const appJson = JSON.parse(fs.readFileSync('app.json'));
appJson.expo.slug = `${appJson.expo.slug}-${uuid()}`
fs.writeFileSync('app.json', JSON.stringify(appJson));
console.log(appJson);
