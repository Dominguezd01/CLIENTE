const tableroAjerdrez = (fila) => {
    if(fila == undefined || fila <= 0|| fila == "" || fila == null || isNaN(fila)){
        document.body.innerHTML += "Numero de filas no correcto<br/>"
    }

    let tableroDibujo = "";
   

    for (let y = 0; y < fila; y++) {
        for (let x = 0; x < fila; x++) {
            if ((x + y) % 2 == 0) {
                tableroDibujo += "■";
            } else tableroDibujo += "□";
        }
        tableroDibujo += "<br>";
    }
    document.body.innerHTML += tableroDibujo;
}



tableroAjerdrez(prompt("Introduce un nuero de filas"))