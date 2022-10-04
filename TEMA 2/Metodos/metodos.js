

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú",
    multiplicarPorDos(){
        for (prop in this) {
            if (this[prop] == true || this[prop] == false || isNaN(this[prop])) {
                continue;
            } else {
                this[prop] *= 2
            }
        }
    },
};

console.log("Antes multiplicar")
for (prop in menu) {
    console.log(menu[prop])
}
menu.multiplicarPorDos()

console.log("Despues multiplicar")
for (prop in menu) {
    console.log(menu[prop])
}