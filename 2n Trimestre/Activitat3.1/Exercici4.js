const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
let fs = require('fs');
rl.question('Introduce la ruta del archivo ', callback);
function callback(archivo){
fs.readFile(archivo, `UTF-8`, (err, archivo) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(archivo);
  }
});
rl.close
}