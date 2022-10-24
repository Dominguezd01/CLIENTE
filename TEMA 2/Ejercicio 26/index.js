/*
Escriba una función count(obj) que devuelva el número 
de propiedades en el objeto. Trate de hacer el código lo más corto posible.
*/

let user = {

    name: 'John',
    
    age: 30
    
};

const count = (user) => Object.keys(user).length
  

console.log(count(user))