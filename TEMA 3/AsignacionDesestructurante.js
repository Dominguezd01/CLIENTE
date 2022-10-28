/*************************************************
 * ASIGNACIÓN DESESTRUCTURANTE
 *
 */

/*********************************
 * DESESTRUCTURACIÓN DE ARRAYS, ITERABLES, CADENAS
 *
 *  Cualquier valor para el que se pueda hacer for..of
 *********************************/
// ARRAYS
let alumnos = ["Jaime", "Alicia", "Eduardo", "Marta"];

let [alumno1, alumno2, alumno3, alumno4] = alumnos;

console.log(alumno1, alumno2, alumno3, alumno4);

// ** El array original no se modifica
console.log(alumnos);

// ** Se puede omitir algún elemento
let [primero, , , cuarto] = alumnos;
console.log(primero, cuarto);

// ** Los elementos que no se asignan, se ignoran
[primero, segundo] = alumnos;
console.log(primero, segundo);

// ** Se pueden asignar el resto de elementos a un array
//      resto es el nombre del array, puede ser cualquier nombre
//      lo único importante es que haya tres puntos delante
//      y sea lo último en una asignación desestructurante
[primero, ...resto] = alumnos;
console.log(primero);
console.log(resto);

// ** Si se asignan más elementos de los que hay,
//      las variables tomarán el valor undefined
[primero, segundo, tercero, cuarto, quinto, sexto] = alumnos;
console.log(cuarto);
console.log(quinto);

// ** Las variables pueden tener valores por defecto
[
  primero,
  segundo,
  tercero,
  cuarto = "VACIO",
  quinto = "VACIO",
  sexto = "VACIO",
] = alumnos;
console.log(cuarto);
console.log(quinto);

// ITERABLES
map = new Map();
map.set(2, 30).set(3, 40);
let [primElemento, segElemento] = map;
console.log(primElemento);
console.log(segElemento);

// CADENAS
let [a, b, c] = "XYZ";
console.log("a: " + a + ", b: " + b + ", c: " + c);

// EJEMPLO: con split
let [nombre, apellido] = "Pepe Pérez Rodríguez".split(" ");
console.log("nombre: " + nombre + ", apellido: " + apellido);

// EJEMPLO: dentro de un for
let veces = new Map();
veces.set(2, 3000);
veces.set(3, 1000);

// Map itera como pares [key, value], muy conveniente para desestructurar
for (let [res, numVeces] of veces) {
  console.log(`${res}:${numVeces}`);
}

/*********************************
 * DESESTRUCTURACIÓN DE OBJETOS
 *
 *  let {var1, var2} = {var1:…, var2:…}
 *
 * OJO: LAS PROPIEDADES SE ASIGNAN POR SU NOMBRE, NO POR SU POSICIÓN
 *
 *********************************/
let opciones = {
  titulo: "Menu",
  alto: 200,
  ancho: 100,
};

let { titulo, ancho, alto } = opciones;

console.log("titulo: " + titulo); // Menu
console.log("ancho: " + ancho); // 100
console.log("alto: " + alto); // 200

// ** Se pueden asignar las propiedades a variables con otro nombre
// ** Si no hay let, hay que rodear todo por paréntesis
({ titulo: t, ancho: ac, alto } = opciones);

console.log("titulo: " + t); // Menu
console.log("ancho  : " + ac); // 100
console.log("alto: " + alto); // 200

// ** Las variables pueden tener valores por defecto
({ titulo: t = "", ancho: ac = 0, alto = 0, prof = 0 } = opciones);
console.log("titulo: " + t); // Menu
console.log("ancho  : " + ac); // 100
console.log("alto: " + alto); // 200
console.log("prof: " + prof); // 0

// ** Se pueden asignar el resto de elementos a un objeto
//      resto es el nombre del objeto, puede ser cualquier nombre
//      lo único importante es que haya tres puntos delante
//      y sea lo último en una asignación desestructurante
({ ancho, ...resto } = opciones);
console.log("ancho  : " + ac); // 100
console.log("resto: " + resto);

// ** Se desestructuración se puede hacer con objetos/arrays anidados

/*********************************
 * APLICACIÓN PRÁCTICA INTERESANTE
 *
 *  Pasar objetos a las funciones, en lugar de parámetros individuales
 *********************************/

// Ejemplo: con parámetros individuales
function mostrarMenu_v0(
  titulo = "Sin título",
  ancho = 200,
  alto = 100,
  items = []
) {
  console.log(
    "Muestro un menú con título: " +
      titulo +
      ", ancho: " +
      ancho +
      ", alto: " +
      alto +
      ", items= " +
      items
  );
  // ...
}
// undefined para que use los valores predeterminados
mostrarMenu_v0("My Menu", undefined, undefined, ["Item1", "Item2"]);

// Ejemplo: con asignación desestructurante
//
//  Ventaja: no tengo que recordar la posición de los parámetros

function mostrarMenu_v1({
  titulo = "Sin título",
  ancho = 200,
  alto = 100,
  items = [],
}) {
  console.log(
    "Muestro un menú con título: " +
      titulo +
      ", ancho: " +
      ancho +
      ", alto: " +
      alto +
      ", items= " +
      items
  );
  // ...
}
// undefined para que use los valores predeterminados
mostrarMenu_v1({ titulo: "My Menu", items: ["Item1", "Item2"] });
mostrarMenu_v1({});
