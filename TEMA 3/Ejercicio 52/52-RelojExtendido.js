/*
//52 - Reloj extendido

Tenemos una clase ‘Clock’. Por ahora, muestra la hora cada segundo.
Crea una nueva clase ExtendedClock que herede de Clock y agrega el parámetro
precision: este es el número de milisegundos entre “tics”.
Debe ser 1000 (1 segundo) por defecto.

Tu código debe estar en el archivo extended-clock.js
No modifiques el clock.js original. Extiéndelo.

*/

class extendedClock extends Clock{
    constructor(template,ticks = 1000){
        super(template)
        this.ticks = ticks
    }
}

let relojExtended = new extendedClock("h m s")

relojExtended.render()
relojExtended.start()