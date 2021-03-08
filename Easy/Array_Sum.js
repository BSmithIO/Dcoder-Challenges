const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthOfNums, nums;
let lineCount = 0
let sum = 0;
rl.on("line", (line) => {
  if (lineCount == 1) {
    nums = line.split(" ");
    rl.close();
    } else {
      lengthOfNums = line;
      lineCount++;
    }            
});


rl.on("close", () => {
  let maxNum = Math.max(...nums);
  for ( let i = 0; i < lengthOfNums; i++) {
    sum += parseInt(nums[i]);
  }
  console.log( sum % maxNum );
  process.exit(0);
})