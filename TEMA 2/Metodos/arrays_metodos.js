/*
    SPLICE:

    A partir de una posicion introduce un numero de 
    items que pones despues del rango
*/


arraySplice = [1,2,3,4,5,6,7]
console.log(arraySplice)

arraySplice.splice(1,1) 

console.log(`Array Splice : ${arraySplice}`)



/*
    SLICE:

    Extrae a otro array los valores comprendidos en el rango 
    especificado en los parametros sin tener en cuenta el ultimo
    es decir, si queremos los 3 primeros valores, el rango tiene
    que llegar hasta un indice mas, es decir 0,3 todo esto sin 
    modificar el array original
*/
arraySlice = ["t", "e", "s", "t"]
console.log(arraySlice)
console.log(arraySlice.slice(1,3))


/*
    CONCAT: 
    
    Devuelve un nuevo array concatenando el array con los parametros
    en caso de ser un array lo introducido por parametros, concatena
    los arrays en uno nuevo

*/ 

    arrayConcat = [1,2,3,4]
    console.log(arrayConcat)

    console.log("Array concat " + arrayConcat.concat(5,6,7,[8,9]))


/* 
    .indexOf():
    
    Busca el elemento en el array desde posicion especificada

    return Si existe -> Indice 
            Si no existe -> -1

*/

    arrayIndexOf = ["a","b","c"]

    console.log("EL VALOR QUE BUSCAS ESTÁ EN: ",arrayIndexOf.indexOf("a"))

/* 
    .lastIndexOf():

    Realiza una funcion similar al anterior pero desde el final 
*/

/*
    .includes(elemento, from):

    Busca si el valor existe en el array y devuelve un booleano 

    return true -> Si esta 
            false -> No esta 
*/

/*
    .reverse():
    
    Da la vuelta al array, modifica el array orignal y nos devuelve un puntero
    a ese array.
*/

/*
    .join("separador"): 

    Junta los elementos de un array en un string con un separador 
    introducido en los parametros
*/

/*
    array.isArray():

    return true -> Es un array 
            false -> No es un array
*/