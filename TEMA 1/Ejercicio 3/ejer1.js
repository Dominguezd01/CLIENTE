let edad;
edad = +prompt("Introduce tu edad", undefined)
console.log(edad)


if (edad < 0 || edad == NaN ) {
    alert("Esa edad no es valida")
} else {
    if (edad >= 0 && edad <= 12) {
        alert("Eres un niño")
    } else if (edad > 12 && edad <= 26) {
        alert("Eres un joven")
    } else if (edad >= 27 && edad <= 60) {
        alert("Eres un adulto")
    } else if (edad > 60) {
        alert("Eres un Jubilado")
        
    }else{
        alert("Edad no valida")
    }
}

