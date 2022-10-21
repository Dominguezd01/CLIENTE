let numVeces = 36000

const lanzarDados = (numVeces) => {
    let mapNums = new Map()
    mapNums.set(2, 0)
        .set(3, 0)
        .set(4, 0)
        .set(5, 0)
        .set(6, 0)
        .set(7, 0)
        .set(8, 0)
        .set(9, 0)
        .set(10, 0)
        .set(11, 0)
        .set(12, 0)


    let resultado = 0
    for (let i = 0; i < numVeces; i++) {
        resultado = Math.floor(Math.random() * (7 - 1) + 1) + Math.floor(Math.random() * (7 - 1) + 1)

        mapNums.set(resultado, mapNums.get(resultado)+1)
    }

    mapNums.forEach( (value, key, map) => {
        document.body.innerHTML+= `El número ${key} sale ${value} veces <br>`;
      });
}

lanzarDados(numVeces)