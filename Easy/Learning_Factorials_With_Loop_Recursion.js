const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let factorial;
rl.on("line", (line) => {
    factorial = line;
    rl.close();
});

rl.on("close", () => {
    for (let i = factorial-1; i > 0; i--) {
        factorial *= i; 
    }
    console.log(factorial);
    process.exit(0);
});
