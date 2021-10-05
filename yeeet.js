#!/usr/bin/env node



/*
TODO:

*/



const args = process.argv.slice(2);
const cmd = args[0]
const filename = args[1]
try {
    if (cmd == "halp") {
        console.log("### Completely Unrelated Mess CLI ###")
        console.log("")
    }
    if (cmd == "r") {
        console.log(cmd)
        fs.unlinkSync(filename);
        console.log("File begone");
    }
}
catch {
    console.log("Failure.");
}