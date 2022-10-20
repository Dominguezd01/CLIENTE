/*
    EJERCICIO 1
*/

let stringOriginal = "hola buenas tardes"
const inicialMayuscula = (original) => {
    return original.split(' ').map((palabra) => palabra[0].toUpperCase() + palabra.slice(1)).join(' ');
}

let mayusculaInicial = inicialMayuscula(stringOriginal)

console.log(mayusculaInicial)



/*
    EJERCICIO 2
*/
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


/*
    EJERCICIO 3
*/

let arrayEj3 = [1,2,3]
console.log(array)
const vaciarArray = (array) => {
    array.map(element => array.shift())
}

vaciarArray(arrayEj3)
console.log(arrayEj3)


/*
    EJERCICIO 4
*/

console.log("---- EJERCICIO 4 ----")

function Alumno (dni, nombre, estudios, curso, año){

    function comprobarEstudios(estudios){
        if(estudios == null || estudios == undefined || estudios == ""){
            estudios = "NO ESTUDIOS"
            return estudios
        }else{
            return estudios
        }
    }

    function comprobarCurso(curso){
        if(this.curso == "" ||this.curso == undefined){
            this.curso = 0

            return this.curso
        }
    }
    function comprobarAño(año){
        if(año == "" ||año == undefined){
            año = 2022

            return año
        }
    }

    this.dni = dni.toUpperCase(),
    this.nombre = inicialMayuscula(nombre),
    this.estudios = comprobarEstudios(estudios).toUpperCase(),
    this.curso = comprobarCurso(curso),
    this.año = comprobarAño(año)

    /*
    this.console.log = (alumno) => {
        console.log("Alumno: ", alumno.dni)
    }
    */
}

alumnoUno = new Alumno("71799254q", "Miguel","2º DaW", 2022)

console.log(alumnoUno)

/*
    EJERCICIO 5
*/

const clase = {
    
    alumnosArray: [],

    matricularAlumno(dni,nombre, estudios,curso, año){
        let nuevoAlumno = new Alumno(dni,nombre,estudios,curso,año)
        alumnosArray.push(nuevoAlumno)
    },

    buscarAlumno(dni){
        alumnosArray.forEach(element => {
            if(element.dni == dni){
                console.log(element)
            }
        });
    }
}

clase.matricularAlumno("123456789x","Pepe", 1, "DAW", 2022)

clase.buscarAlumno("123456789x")


/*
    EJERCICIO 6
*/


const adivina = (min, max)=>{
    if(min == "" || min <0|| min >max || min == "" ||isNaN(min)||max == "" || max <0 || max == "" ||isNaN(max)|| min == undefined || max==undefined ||min == null ||max == null){
        alert("Valor no valido")

            
    }

    let numeroAdivinar = 0;
    numeroAdivinar = Math.floor(Math.random() * (max - min) + min)
    let usuario = prompt("Adivina el numero")

    usuario == numeroAdivinar ? alert("ES CORRECTO") : alert("NO ES CORRECTO, EL NUMERO ERA: " +numeroAdivinar)
}

adivina(prompt("Introduce el valor minimo"), prompt("Introduce el valor maximo"))