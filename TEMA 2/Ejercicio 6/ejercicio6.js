let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
 
const numDni = (numDni) => {
    numDni = prompt("Introduce tu numero de DNI sin la letra")

    if(numDni == undefined|| isNaN(numDni) || numDni == "" || numDni == null){
        alert("introduce un numero valido")
    }
}