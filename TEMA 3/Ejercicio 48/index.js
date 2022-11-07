/*
Crea una clase Vector que representa un vector. 
Al crearlo, se pasarán como parámetros dos valores numéricos que serán la x 
(distancia al punto 0,0 en el eje de las x), y la y 
((distancia al punto 0,0 en el eje de las y).

Esta clase tendrá dos métodos más: sumar y restar, que toman otro vector como 
parámetro, y devuelve un nuevo vector resultado de la suma o diferencia de los 
valores x e y de los dos vectores (el this y el parámetro).

Además, tendrá una propiedad longitud, que devuelve la longitud del vector, 
esto es, la distancia desde el origen (0,0) al punto (x, y).

console.log(new Vector(1,2).sumar(2, 3)); // => {x: 3, y: 5};

console.log(new Vector(1,2).restar(2, 3)); // => {x: -1, y: -1};

console.log(new Vector(3, 4).longitud); // => 5

*/

class Vector{
    constructor(x, y){
        this.x = x 
        this.y = y
    }

    sumar(v2){
        return new Vector(this.x + v2.x, this.y + v2.y)
        
    }
    restar(v2){
        return new Vector(this.x - v2.x, this.y - v2.y)
        
    }

    get longitud(){
        return Math.sqrt((this.x**2) + (this.y**2))
    }
}


let v1 = new Vector(4,2)
let v2 = new Vector(4,2)
console.log(v1.longitud)
console.log(v1.sumar(v2))
console.log(v1.restar(v2))


console.log(new Vector(2,3).sumar(new Vector(2,3)))