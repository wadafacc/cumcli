#!/usr/bin/env node

const fs = require('fs');
const figlet = require('figlet');


const halpt = `
### Completely Unrelated Mess CLI ###
This CLI does absolutely nothing! It is a waste of disk space and time.
Appreciate it though. :)
If you are actually curious what this shiet does, use the 'hjelp' function.
`;
const hjelpt = `
___  ___        ___  _______   ___       ________            
|\  \|\  \      |\  \|\  ___ \ |\  \     |\   __  \           
\ \  \\\  \     \ \  \ \   __/|\ \  \    \ \  \|\  \          
 \ \   __  \  __ \ \  \ \  \_|/_\ \  \    \ \   ____\         
  \ \  \ \  \|\  \\_\  \ \  \_|\ \ \  \____\ \  \___|     ___ 
   \ \__\ \__\ \________\ \_______\ \_______\ \__\       |\__\
    \|__|\|__|\|________|\|_______|\|_______|\|__|       \|__|
                                                              
### HJELP MENU ###
Well, guess what. Fuck you. :)
Go figure it out yourself.
(However, if you actually need help with a command, use '<cmd> help')
`;



const args = process.argv.slice(2);
const cmd = args[0]
const filename = args[1]
try {

    /*
    COMMON / BASIC COMMANDS 
    */

    // "help" commands
    if (cmd == "halp") {
        figlet('Hello World!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        }); console.log(halpt);
    }

    if (cmd == "hjelp") {

        console.log(hjelpt);
    }



    if (cmd == "--version") {
        const data = fs.readFileSync('/cumcli/package.json', 'utf8');
        const ver = JSON.parse(data);
        console.log("Version ", ver.version);
    }
}


catch {
    console.log("Sumn went wrong you fuckin idiot.");
}