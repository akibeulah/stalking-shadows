var fs = require('fs')
const packageJson = require("./package.json");

let ver = packageJson.version
console.log("Old version number: " + ver)

updatedVersionNumber = parseInt(ver.substr(ver.lastIndexOf(".") + 1)) + 1
packageJson.version = ver.substr(0, ver.lastIndexOf(".") + 1) + updatedVersionNumber

console.log("New version number: " + packageJson.version)
fs.open('package.json', 'w+', function (err, f) {
    if (err) {
        return console.error(err);
    }

    try {
        fs.writeFile("./package.json", JSON.stringify(packageJson, null, 2), 'utf-8', () => {
            console.log('Your new package.json file: \n', packageJson)
        })
    } catch (err) {
        console.err(error)
    }
});