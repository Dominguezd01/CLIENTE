let array = [1,2,3]
console.log(array)
const vaciarArray = (array) => {
    array.map(element => array.shift())
}

vaciarArray(array)
console.log(array)