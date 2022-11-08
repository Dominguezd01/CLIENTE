class Coche extends Vehiculo{
    constructor(color, marca, modelo, velMax = 120){
        super(color, marca, modelo, velMax)
    }

    parar(){
        return "Aparcar"
    }
}

class Avion extends Vehiculo{
    constructor(color, marca, modelo, velMax = 1000){
        super(color, marca, modelo, velMax)
    }

    comenzar(){
        return "Despegar"
    }

    parar(){
        return "Aterrizar"
    }

    distanciaMax(time){
        return `Llevas ${time} recorriendo ${this.velMax * time}`
    }
}



console.log("----------COCHE----------")
let car1 = new Coche("Rojo", "Audi", "Pipo")
car1.comenzar()
console.log(car1.parar())

console.log("----------AVION----------")
let avion1 = new Avion("Blanco", "Aviones Paco", "747")

console.log(avion1.comenzar())
console.log(avion1.parar())
console.log(avion1.distanciaMax(1234))


