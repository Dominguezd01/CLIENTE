'use strict'


const pedirOperador = () => {
    let salir = false;
    while(!salir){
        let operador = prompt("Elige una Operación\n +, -, *, /, %, o **")
     
        switch(operador){
            case "+": 
                suma()
                break

            case "-": 
                resta()
                break
            
            case "*": 
                multiplicacion()
                break

            case "/": 
                division()
                break

            case "%": 
                modulo()
                break

            case "**":
                exponente()
                break

            default: alert("Operador no valido")
        }
     }
}

const comprobarNums = (n) =>{
    if (isNaN(n) || n == undefined || n == "") {
        return false
    }else{
        return true
    }
}

const suma = () => {
    let salir = false
    let n1 = 0
    let n2 = 0
    while(!salir){
        n1 = prompt("Intoduce el primer valor");
        n2 = prompt("Intoduce el segundo valor");
        
        if(comprobarNums(n1) == false ||comprobarNums(n2) == false ){
            alert("Introduce unos numeros validos")
            continue
        }else{
            let resultado = Number(n1) + Number(n2) 
            alert(n1 + " + "+  n2 + " = " + resultado)
            salir = true
        }
        
    }
}

const resta = () => {
    let salir = false
    let n1 = 0
    let n2 = 0
    while(!salir){
        n1 = prompt("Intoduce el primer valor");
        n2 = prompt("Intoduce el segundo valor");
        
        if(comprobarNums(n1) == false ||comprobarNums(n2) == false ){
            alert("Introduce unos numeros validos")
            continue
        }else{
            let resultado = Number(n1) - Number(n2) 
            alert(n1 + " - "+  n2 + " = " + resultado)
            salir = true
        }
        
    }
}

const multiplicacion = () => {
    let salir = false
    let n1 = 0
    let n2 = 0
    while(!salir){
        n1 = prompt("Intoduce el primer valor");
        n2 = prompt("Intoduce el segundo valor");
        
        if(comprobarNums(n1) == false ||comprobarNums(n2) == false ){
            alert("Introduce unos numeros validos")
            continue
        }else{
            let resultado = Number(n1) * Number(n2) 
            alert(n1 + " X "+  n2 + " = " + resultado)
            salir = true
        }
        
    }
}

const division = () => {
    let salir = false
    let n1 = 0
    let n2 = 0
    while(!salir){
        n1 = prompt("Intoduce el primer valor");
        n2 = prompt("Intoduce el segundo valor");
        
        if(comprobarNums(n1) == false ||comprobarNums(n2) == false ){
            alert("Introduce unos numeros validos")
            continue
        }else{
            let resultado = Number(n1) / Number(n2) 
            alert(n1 + " / "+  n2 + " = " + resultado)
            salir = true
        }
        
    }
}

const modulo = () => {
    let salir = false
    let n1 = 0
    let n2 = 0
    while(!salir){
        n1 = prompt("Intoduce el primer valor");
        n2 = prompt("Intoduce el segundo valor");
        
        if(comprobarNums(n1) == false ||comprobarNums(n2) == false ){
            alert("Introduce unos numeros validos")
            continue 
        }else{
            let resultado = Number(n1) % Number(n2) 
            alert(n1 + " % "+  n2 + " = " + resultado)
            salir = true
        }
        
    }
}

const exponente = () => {
    let salir = false
    let n1 = 0
    let n2 = 0
    while(!salir){
        n1 = prompt("Intoduce el primer valor");
        n2 = prompt("Intoduce el segundo valor");
        
        if(comprobarNums(n1) == false ||comprobarNums(n2) == false ){
            alert("Introduce unos numeros validos")
            continue
        }else{
            let resultado = Number(n1) ** Number(n2)  
            alert(n1 + " elevado a "+  n2 + " = " + resultado)
            salir = true
        }
        
    }
}



pedirOperador()
