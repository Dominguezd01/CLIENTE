/*
let coche = {
    marca: "Seat",
    modelo: "Ibiza",
    matriculado: true,
    "nombre propietario": "Manolo",
    1: 2,
}

console.log(coche.modelo)
console.log(coche["modelo"])
console.log(coche["nombre propietario"])
console.log(coche["1"])

//Si se accede a propiedades que no existen, devuelve Undefined

console.log(coche.pepoTriste) //--> Devolveria Undefined

//Operador in 

console.log("pepoTriste" in coche) // --> Devolverá false porque no existe en coche


//Se puede crear una propiedad asignandole un valor

coche.estado = "Bueno"
console.log(coche.estado)

delete coche["1"] //Elimina la propieda 1 del objeto

for(prop in coche){
    alert("La propiedad "+prop + " "+ "tiene un valor "+ coche[prop])
}
*/



console.log("Ejercicio 1:")
console.log("------------------")
let user1 = {}


user1.name ="John"
user1.surname = "Smith"

user1.name = "Pete"
delete user1.name
for (prop in user1) {
    console.log(prop+ ": "+ user1[prop]);
}

let user={
    nombre: "Pepe",
}
console.log("-----------")
console.log("Ejercicio 2:")
console.log("--------------")
const objetoVacio = () => {
    for (prop in user) {
        return false;
    }
    return true;
}

console.log(objetoVacio())

console.log("---------")
console.log("Ejercicio 3")
console.log("----------")


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let suma = 0
for(prop in salaries){
     suma += salaries[prop]
     console.log(suma)
}
console.log("----------")
console.log("Ejercicio 4")
console.log("------------")


let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

console.log("Antes de la función")
console.log("--------------------")

for (prop in menu) {
    console.log(menu[prop])
}

const multiplicarPorDos = (objeto) => {
    for (prop in objeto) {
        if (objeto[prop] == true || objeto[prop] == false || isNaN(objeto[prop])) {
            continue;
        } else {
            objeto[prop] *= 2
        }
    }
}
multiplicarPorDos(menu)
console.log("Después de la función")
console.log("--------------------")

for (prop in menu) {
    console.log(menu[prop])
}