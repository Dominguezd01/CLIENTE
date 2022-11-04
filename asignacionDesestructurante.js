let ventana2 ={
    titulo: "Hola2",
    ancho: 200,
    alto: 1550,
    color: "amarillo"
}

function printarVentana({titulo,ancho,alto,color="rojo"}){
    console.log(titulo,ancho,alto,color)
}



printarVentana(ventana2)