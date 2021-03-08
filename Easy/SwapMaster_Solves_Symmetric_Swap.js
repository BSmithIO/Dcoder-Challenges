const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let arr;
rl.on("line", (line) => {
    if (lineCount == 0) {
        lineCount++;
    } else {
        arr = line.split(" ");
        arr.reverse();
        rl.close();
    }
})

rl.on("close", () => {
    console.log(arr.join(" "));
    process.exit(0);