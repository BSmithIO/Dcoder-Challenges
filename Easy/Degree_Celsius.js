const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let temperature;
rl.on("line", (line) => {
  temperature = line;
  rl.close();
});

rl.on("close", () => {
  console.log((temperature * 9/5) + 32);
  process.exit(0);
})