const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let linecount = 0;
let lines = [];
let lineend;

rl.on('line', function(line){
  if (linecount == 0) { 
    lineend = line;
    linecount += 1;
    } else if (linecount < lineend){
      linecount += 1;
      lines.push(parseFloat(line).toFixed(2));
    } else if (linecount == lineend) {
        lines.push(parseFloat(line).toFixed(2));
        rl.close();
    }
});

rl.on('close', function() {
  console.log(lines.join("\n"));
  process.exit(0)
}) 