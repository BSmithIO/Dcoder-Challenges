const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let lineCount = 0;
rl.on("line", (line) => {
    arr = line.split(" ");
    rl.close();
});

rl.on("close", () => {
    let string = arr[0];
    let subString = arr[1];
    if (string.includes(subString)) {
        console.log("1");
    } else {
        console.log("0");
    }
    process.exit(0);
});