/*
Crea una clase denominada Vehículo que tenga algunas características como el color, marca, modelo y la velocidad máxima 
que puede alcanzar.

También tendrá tres métodos además del constructor: comenzar que mostrará el mensaje “Encender motor”,
 parar que mostrará “Apagar motor” y distanciaMax que recibirá un parámetro con indicando el tiempo de 
 funcionamiento y calculará la distancia máxima que puede haber recorrido, que será el resultado de multiplicar
  la velocidad máxima por el tiempo.
*/

class Vehiculo {
    constructor(color, marca, modelo, velMax){
       this.color = color
       this.marca = marca
       this.modelo = modelo
       this.velMax = velMax 
    }
    comenzar(){
        console.log("Encender motor")

    }

    parar(){
        console.log("El motor se ha parado")
    }

    distanciaMax(time){
        return this.velMax * time
    }
}


