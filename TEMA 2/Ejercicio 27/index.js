/*
EJERCICIO 27: Crear una fecha
Crea un objeto Date para la fecha: Feb 20, 2012, 3:12am. La zona horaria es local.
Muéstralo en pantalla utilizando alert.

*/

let fecha = new Date(2012,1,20,3,12,0)
let fecha2 = new Date()
fecha2.getDate()
alert(fecha2)
alert(fecha.toLocaleString())

