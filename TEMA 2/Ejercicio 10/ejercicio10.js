
let styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")

styles[parseInt(styles.length/2)] = "Classics"

let primero = styles.shift()
console.log(primero)

styles.unshift("Rap", "Reggae")

console.log(styles)

