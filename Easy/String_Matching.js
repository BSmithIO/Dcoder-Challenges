const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let lineEnd;
let testArr;
let resultArr = [];

rl.on('line', function(line){
    function test () {
        testarr = line.split(" ");
        if (testarr[0].includes(testarr[1])) {
            resultArr.push("Yes");
        } else {
            resultArr.push("No");
        }
    }
  if (lineCount == 0) { 
    lineEnd = line;
    lineCount++;
    } else if (lineCount < lineEnd){
      lineCount++;
        test();
    } else if (lineCount == lineEnd) {
        test();
        rl.close();
    }
});

rl.on('close', function() {
  console.log(resultArr.join("\n"));
  process.exit(0)
}) 