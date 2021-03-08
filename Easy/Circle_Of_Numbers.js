const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr;
let firstNumber;
let n;
let result;
rl.on("line", (line) => {
    arr = line.split(" ");
    n = parseInt(arr[0]);
    firstNumber = parseInt(arr[1]);
    console.log((firstNumber+(n/2)) % n);
    process.exit(0);
});