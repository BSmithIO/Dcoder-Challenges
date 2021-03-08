const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineLength;
let string = "";
let lineCount = 0;
rl.on("line", (line) => {
  if (lineCount == 1) {
    string = line.split(" ");
    rl.close();
  } else {
    lineCount++
    lineLength = line;
  }
  
});

rl.on("close", () => {
  for ( let i = 0; i < lineLength; i++) {
    if ( string[i].toLowerCase() == "nemo") {
      console.log(i + 1);
    }
  }
  process.exit(0);
})

