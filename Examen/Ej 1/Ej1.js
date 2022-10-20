let stringOriginal = "hola buenas tardes"
const inicialMayuscula = (original) => {
    return original.split(' ').map((palabra) => palabra[0].toUpperCase() + palabra.slice(1)).join(' ');
}

let mayusculaInicial = inicialMayuscula(stringOriginal)

console.log(mayusculaInicial)