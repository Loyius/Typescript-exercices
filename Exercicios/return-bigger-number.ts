import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function returnBiggerNumber(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2;
}

rl.question('Digite dois números separados por espaço: ', (input) => {
  const [a, b] = input.split(' ').map(Number);
  console.log('Maior número:', returnBiggerNumber(a, b));
  rl.close();
});
//npm install --save-dev @types/node
//npx tsc --init
//npx tsc return-bigger-number.ts
//node return-bigger-number.js