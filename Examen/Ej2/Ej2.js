let array = [1,2,3,4,5,6,7,8,9,10]

console.log("El array original es: " + array)
const copiarArray = (array) => {
    let arrayCopia = []

    array.forEach(elemento => {
        arrayCopia.push(elemento)
    })

    return arrayCopia;
}   


let arrayCopia = copiarArray(array)

console.log("El array copia es: "+arrayCopia)