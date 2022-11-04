class Vehiculo{
    
    constructor(tipo, color, km) {
        this.tipo = tipo
        this.color = color 
        this.km = km
    }


    arrancar (){
        console.log("WATATATATATATA")
    }
}


let coche1 = new Vehiculo("Tractor", "Amarillo", "569")

console.log(coche1.tipo)
coche1.arrancar()
