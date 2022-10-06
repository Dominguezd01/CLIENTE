//Constructor
function Coche(marca,modelo,matriculado){
    this.marca =  marca
    this.modelo = modelo
    this.matriculado = matriculado
}

let miCoche = new Coche("Fiat", "500L", true);

console.log(miCoche)

function Perro(nombre){
    this.nombre = nombre

    this.ladrar = function (){
        console.log("Guau")
    }

    this.saludar = function(){
        console.log("Pipo es un buen perro")
    }
}

let miPerro = new Perro("Pipo")

miPerro.ladrar()
miPerro.saludar()