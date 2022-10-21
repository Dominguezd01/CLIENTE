let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


const limpiarArray = (array) => {
  let map = new Map()
  array.forEach(element => {
    let introducir = element.toLowerCase().split("").sort().join("")

    map.set(introducir, element)
  });
  return Array.from(map.values())
}

let arrayLimpio = limpiarArray(arr)

console.log("ARRAY LIMPIO: " + arrayLimpio)