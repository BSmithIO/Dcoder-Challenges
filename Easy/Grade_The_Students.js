const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let lineCount = 0;
let lineEnd = 0;
let subjects = [];
rl.on("line", (line) => {
  if (lineCount == 0) {
    lineCount++;
    lineEnd = line;
  } else if (lineCount == lineEnd) {
    subjects.push(line.split(" "));
    rl.close()
  } else {
    subjects.push(line.split(" "));
    lineCount++;
  }
});

rl.on("close", () => {
  let mathGrade;
  let algoGrade;
  subjects.forEach(grade => {
    mathGrade = grade[0];
    algoGrade = grade[1];
    if (mathGrade > 70 && algoGrade > 50) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
  )
  process.exit(0);
});