/*************************************
 * Volvemos a los objetos,
 *   para ver unos iterables que
 *   nos permiten recorrer sus propiedades y valores
 * ***********************************/

/*************************************
 * Object.keys(obj)
 *      Devuelve un array
 *      Formado por todas las propiedades del objeto
 *
 * Object.values(obj)
 *      Devuelve un array
 *      Formado por todos los valores de las propiedades del objeto
 *
 * Object.entries(obj)
 *      Devuelve un array
 *      Formado por arrays de dos elementos: [propiedad, valor]
 *
 * DIFERENCIAS CON los iterables de map y set
 *    - estos métodos devuelven arrays verdaderos, no iterables
 *
 * Al igual que for .. of
 *    - estos métodos ignoran las propiedades simbólicas
 *
 * *************************************/
/**************************************
 * OTRO MÉTODO: object.fromEntries()
 *
 * Object.fromEntries(iterable)
 *      iterable:
 *         un array, un map u otro iterable
 *         los elementos serán pares clave-valor
 *      Devuelve un objeto
 *
 * ***********************************/
let user = {
  name: "John",
  age: 30,
};

/*
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
*/

// bucle sobre los valores
for (let valor of Object.values(user)) {
  console.log(valor); // John, luego 30
}

/* EJEMPLO DE USO
 */
let precios = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// convertir precios a array, map - cada par clave/valor en otro par
// y luego fromEntries nos devuelve el objeto
let doblePrecios = Object.fromEntries(
  Object.entries(precios).map(([clave, valor]) => [clave, valor * 2])
);

console.log(doblePrecios.meat); // 8
