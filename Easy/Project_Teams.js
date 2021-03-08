const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
    console.log(Math.floor(line/3));
    process.exit(0);
})