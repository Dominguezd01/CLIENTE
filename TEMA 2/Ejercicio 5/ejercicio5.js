
const capicua = (texto) => {
    console.log("Texto Orginal: ", texto)
    console.log(texto.split(""))
    texto = texto.toLowerCase().split(" ").join("")
    let textoCortado = texto.split("").reverse().join("")
    console.log("Texto dado la vuelta:", textoCortado)

    if(textoCortado != texto){
        alert("No es palindromo")
    }else{
        alert("Es palindromo")
    }
}

capicua("La ruta nos aporto otro paso natural")