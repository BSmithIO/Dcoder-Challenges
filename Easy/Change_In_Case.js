const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let arr = [];

rl.on("line", (line) => {
    arr.push(line);
    if (line.split(" ").length == 2) {
        rl.close();
    }
});

rl.on("close", () => {
    let idx = arr[2].split(" ");
    let string = arr[1].split("");
    let x = idx[0];
    let y = idx[1];
    const isLowerCase = (char) => char.toLowerCase() === char;
    const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
    string[x] = swapCase(string[x]);
    string[y] = swapCase(string[y]);
    console.log(string.join(""));
    process.exit(0);
});