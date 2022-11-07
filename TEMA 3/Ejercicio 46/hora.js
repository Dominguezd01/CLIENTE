const cambiaHora = () =>{
    let hora = document.getElementById("hora")
    
    let hoy = new Date()
    if(hoy.getMinutes() <= 10){
        hora.innerHTML = `${hoy.getHours()} : 0${hoy.getMinutes()} : ${hoy.getSeconds()}`
    }else{
        hora.innerHTML = `${hoy.getHours()} : ${hoy.getMinutes()} : ${hoy.getSeconds()}`
    }
    
    if(hoy.getSeconds() < 10){
        hora.innerHTML = `${hoy.getHours()} : ${hoy.getMinutes()} : 0${hoy.getSeconds()}`
    }else{
        hora.innerHTML = `${hoy.getHours()} : ${hoy.getMinutes()} : ${hoy.getSeconds()}`
    }
}
setInterval(cambiaHora, 1000)