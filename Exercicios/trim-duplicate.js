const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function trimDuplicate(str) { 
  if (str.length === 0) return str;

  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result += str[i];
    }
  }
  return result;
}

rl.question('Digite uma string: ', (answer) => {
  const result = trimDuplicate(answer);
  console.log('String sem caracteres duplicados consecutivos:', result);
  rl.close();
});
