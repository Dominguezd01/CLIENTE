/*************************************************
 * JSON
 *
 * Tenemos un objetos complejo
 *  y nos gustaría convertirlo en un string
 *  para enviarlo por la red
 *       o para archivarlo
 *
 * JSON: Notación de objeto JavaScript
 *      Es un formato para representar valores y objetos
 *          como una cadena
 *      Es un estándar
 *      Permite "serializar"
 *
 * JSON: nos proporciona utilidades
 *       para cambiar a/desde JSON
 *
 * Qué se puede convertir a JSON
 *  - Objetos
 *  - Arrays
 *  - Tipos primitivos:
 *          - string
 *          - number
 *          - boolean
 *          - null
 *  - Puede tener objetos anidados
 *
 * Qué no se puede convertir a JSON
 *  - Funciones
 *  - Métodos de los objetos
 *  - Símbolos
 *  - undefined
 *
 * MÉTODOS
 * JSON.stringify(valor) -> cadena JSON
 * JSON.parse(cadena)    -> valor
 */
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // ¡obtenemos un string!

console.log(json);
/* Objeto JSON-codificado:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "spouse": null
  }
  */
let nuevoEstudiante = JSON.parse(json);
console.log(nuevoEstudiante);

// Intentar pasar a JSON un objeto con elementos que no se pueden pasar
let user = {
  sayHi() {
    // ignorado
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignorado
  something: undefined, // ignorado
};

console.log(JSON.stringify(user)); // {} (objeto vacío)

// Trabaja bien con objetos anidados
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log(JSON.stringify(meetup));
/* La estructura completa es convertida a String:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */

// El caso de las fechas
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

meetup = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(meetup.date.getDate()); // ¡Ahora funciona!
