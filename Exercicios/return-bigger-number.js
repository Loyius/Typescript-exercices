"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function returnBiggerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
rl.question('Digite dois números separados por espaço: ', function (input) {
    var _a = input.split(' ').map(Number), a = _a[0], b = _a[1];
    console.log('Maior número:', returnBiggerNumber(a, b));
    rl.close();
});
//npm install --save-dev @types/node
//npx tsc --init
//npx tsc return-bigger-number.ts
//node return-bigger-number.js
