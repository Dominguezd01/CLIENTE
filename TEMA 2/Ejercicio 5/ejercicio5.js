
const capicua = (texto) => {
    console.log("Texto Orginal: ", texto)
     console.log(texto.split(""))
     
    
    let textoCortado = texto.split(" ").join("").split("").reverse().join("")
    console.log("Texto dado la vuelta:",textoCortado)
}

capicua("La ruta nos aporto otro paso natural")