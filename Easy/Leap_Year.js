const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let lineEnd;
let arrResult = [];
rl.on("line", (line) => {
    const test = () => {
        if (line % 400 == 0) {
            arrResult.push("Yes");
        } else if (line % 100 == 0) {
            arrResult.push("No");
        } else if (line % 4 == 0) {
            arrResult.push("Yes");
        } else {
            arrResult.push("No");
        }
    }
    if (lineCount == 0) {
        lineEnd = line;
        lineCount++;
    } else if (lineCount < lineEnd) {
        test();
        lineCount++;
    } else if (lineCount == lineEnd) {
        test();
        rl.close();
    }
});

rl.on("close", () => {
    console.log(arrResult.join("\n"));
    process.exit(0);
});