let horas = 9
let minutos = 0
let salir = false

while (!salir) {
    if (minutos < 10) {
        document.body.innerHTML += `${horas} : 0${minutos} <br>`
        minutos += 5

    } else {
        document.body.innerHTML += `${horas} : ${minutos}<br>`
        minutos += 5
    }
    if (minutos == 60) {
        minutos = 0
        horas++
    }
    if (horas == 21 && minutos == 30) {
        document.body.innerHTML += `${horas} : ${minutos}<br>`
        salir = true
    }
}