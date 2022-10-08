'use strict'

const convertidorBinario = (numero)=>{
    let binarios = []
    while (numero!==0){
        let resto = parseInt(numero%2)
        numero = Math.floor(numero/2);

        binarios.push(resto);
    }
    binarios.reverse().forEach(num => document.body.innerHTML+= num)
}

document.body.innerHTML+= 20..toString(2)+ "<br/>"
convertidorBinario(20);