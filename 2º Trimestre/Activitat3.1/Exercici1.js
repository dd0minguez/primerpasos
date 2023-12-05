const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Introduce tu nombre', callback);

function callback(respuesta){
  console.log(`Bienvenido ${respuesta}`)
  rl.close()
}