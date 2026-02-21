var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sum;
console.log('Digite dois números separados por espaço: ');
rl.question('', function (input) {
    var _a, _b;
    var num1 = (_a = input.split(' ')[0]) !== null && _a !== void 0 ? _a : '';
    var num2 = (_b = input.split(' ')[1]) !== null && _b !== void 0 ? _b : '';
    sum = (parseFloat(num1) || 0) + (parseFloat(num2) || 0);
    return sum;
});
console.log("A soma dos n\u00FAmeros \u00E9: ".concat(sum));
rl.close();
//npm install --save-dev @types/node
//npx tsc --init
//npx tsc sum.ts
//node sum.js
