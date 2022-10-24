/*
EJERCICIO 29: Día de la semana europeo
En los países europeos se cuentan los días de la semana a partir 
del lunes (número 1), seguido del martes (número 2), hasta el domingo (número 7). 
Escribe una función getLocalDay(date) que devuelva el día de la semana “europeo” 
para la variable date.

Ejemplo:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, debería mostrar 2

*/
let fecha = new Date(2001, 5,12);


const getLocalDay = (date) =>{
    if(date.getDay() == 0){
        return 7
    }else{
        return date.getDay()
    }
}

console.log(getLocalDay(fecha))