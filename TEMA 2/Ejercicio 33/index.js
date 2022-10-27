/*
EJERCICIO 33: Segundos que faltan para el día de mañana
Crea una función getSecondsToTomorrow() que devuelva la cantidad de segundos que faltan para el día de mañana.

Por ejemplo, si ahora son las 23:00, entonces:

getSecondsToTomorrow() == 3600


*/

const getSecondsToTomorrow = () =>{
    let hoy = new Date()

    let mañana = new Date(2022,9,29)

    console.log(hoy.getTime())
    console.log(mañana.getTime())
    let resultado = mañana.getTime()-hoy.getTime()

    console.log(resultado)
}

getSecondsToTomorrow()