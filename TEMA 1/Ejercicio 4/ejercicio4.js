let horas = 9
let minutos = 0
let salir = false

while (!salir) {
    if (minutos == 0) {
        console.log(`${horas} : ${minutos}${minutos}`)
        minutos += 30

    } else if (minutos == 30) {
        console.log(`${horas} : ${minutos}`)
        minutos = 0
        horas++
    }
    if (horas == 21 && minutos == 30) {
        console.log(`${horas} : ${minutos}`)
        salir = true
    }
}