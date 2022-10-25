
const getDayAgo = (fecha, dias) => {
    let mil1 = fecha.getTime()
    let mil2 = dias * 24 * 60 *60 * 100

    let date = new Date(mil2 - mil1)

    console.log(date)
}

getDayAgo()

//Ej 31
const getLastDayMonth = (year, month) =>{
    let fecha = new Date(year, (month == 11? 0: month+1), 1)
    return fecha.getDate()
}

console.log(getLastDayMonth(2022,1))