const bonoloto = () => {
    let numeros = []
    let complementario = 0;
    let num = 0;
    for(let i = 0; i<6;i++){
        num = parseInt(Math.floor(Math.random() * 50))
        if(numeros.includes(num)){
            num = parseInt(Math.floor(Math.random() * 50))
            numeros.push(num)
        }else{
            numeros.push(num)
        }
        
    }
    complementario = parseInt(Math.random() * 9)

    alert(`${numeros.join(" ")} \n ${complementario}`)
}

bonoloto()