const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on("line", (line) => {
  let arr = line.split(" ");
  let result = parseInt(arr[0]) + parseInt(arr[1]);
  console.log(result);
  process.exit(0)
});