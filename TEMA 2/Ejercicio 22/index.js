let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


const limpiarArray = (array) => {
  let map = new Map()
  array.forEach(element => {
    let introducir = element.toLowerCase().split("").sort().join("")

    map.set(introducir, element)
    
    
  });
  console.log(map)
  let arrayLimpio = Array.from(map.values())

  return arrayLimpio
}



let arrayLimpio = limpiarArray(arr)

console.log("ARRAY LIMPIO: " + arrayLimpio)