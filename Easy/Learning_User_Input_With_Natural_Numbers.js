const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let initNum = 0;
let sumOfNum = 0;

rl.on("line", (line) => {
    initNum = line;
    rl.close();
});


rl.on("close", () => {
    for (let i = 1; i <= initNum; i++) {
    sumOfNum += i;
}
    console.log(sumOfNum);
    process.exit(0);
})