const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let sum;

console.log('Digite dois números separados por espaço: ');
rl.question('', (input: string) => {
    let [num1 = '', num2 = ''] = input.split(' ');
    sum = (parseFloat(num1) || 0) + (parseFloat(num2) || 0);
    console.log(`A soma dos números é: ${sum}`);
    rl.close();
});


//npm install --save-dev @types/node
//npx tsc --init
//npx tsc sum.ts
//node sum.js