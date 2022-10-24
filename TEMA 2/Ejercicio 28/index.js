/*
Escribe una función getWeekDay(date) que devuelva el día de la semana en formato corto: 
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
Por ejemplo:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );      // debería mostrar "TU"

*/


let date = new Date(2012, 0, 3);

const getWeekDay = (date) =>{
    let nombres = [
        "SU",
        "MO",
        "TU",
        "WE",
        "TH",
        "FR",
        "SA"]

        return nombres[date.getDay()]

}



console.log(getWeekDay(date))
