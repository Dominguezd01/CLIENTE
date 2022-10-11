const almacenarEntrada = () =>{
    let salir = false
    let entradas = []
    let valor = 0
    while(!salir){
        valor = prompt("Introduce un valor numerico")

        if(valor == undefined || valor == "" || isNaN(valor)){
            return entradas
        }else{
            entradas.push(valor)
        }
    }
}


console.log(almacenarEntrada())
