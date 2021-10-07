#!/usr/bin/env node

const fs = require('fs');



const args = process.argv.slice(2);
const cmd = args[0]
const filename = args[1]
try {

    /*
    COMMON / BASIC COMMANDS 
    */

    if (cmd == "halp") {
        fs.readFile('halp.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
        })
    }
    if (cmd == "--version") {
        const data = fs.readFileSync('./package.json', 'utf8');
        const ver = JSON.parse(data);
        console.log("Version:", ver.version);
    }




}
catch {
    console.log("Sumn went wrong you fuckin idiot.");
}