const cambiaHora = () =>{
    let hora = document.getElementById("hora")
    
    let hoy = new Date()
    if(hoy.getSeconds() < 10){
        hora.value = `${hoy.getHours()} : ${hoy.getMinutes()} : 0${hoy.getSeconds()}`
    }else{
        hora.value = `${hoy.getHours()} : ${hoy.getMinutes()} : ${hoy.getSeconds()}`
    }
}
setInterval(cambiaHora, 1000)