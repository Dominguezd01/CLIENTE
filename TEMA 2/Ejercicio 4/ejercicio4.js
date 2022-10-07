function Coche (marticula, precio, vel_max){
    this.marticula = marticula
    this.precio = precio
    this. vel_max = vel_max

    this.comenzar = () => {
        console.log("Encender motor")
    }

    this.parar = () =>{
        console.log("Apagar motor")
    }

    this.distanciaMax = (tiempo) => {
        console.log("El coche ha recorrido ", this.vel_max*tiempo)
    }

    this.toString = () =>{
        return "Coche con matricula: " + this.marticula
    }

    this.valueOf = () =>{
        return "El precio es: " + this.precio + "€"
    }
}

let miCoche = new Coche("09006BZN", 135000, 250)

miCoche.comenzar()
miCoche.parar()
miCoche.distanciaMax(25)
alert(miCoche)
miCoche.valueOf()