/* 

    entrada: 32C
    salida: 80F


    entrada: (60)    (F)
    salida: 25C

    separar numeros de letras
    si letra == F
    convertir a C
    si letra == C
    convertir a F
    else 
    error

 */
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Introduce la temperatura ', callback);

function callback(respuesta){
    escala = respuesta.substring(0, respuesta.length - 1)
    if (respuesta.substring(respuesta.length -1) == 'C'){
        grados1 = (escala * 9/5) + 32
        console.log(`Tu temperatura en Fahrenheit es:  ${grados1}F`)
    }
    else {
        grados2 = (escala - 32) * (5/9)
        console.log(`Tu temperatura en Celcius es:  ${grados2}C`)
    }   
  rl.close()
}