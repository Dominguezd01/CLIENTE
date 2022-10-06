function Vector(x,y){
    this.x = x
    this.y = y

    this.sumar = function(vector2){
       Number(this.x += vector2.x)
       Number(this.y += vector2.y)
       console.log("Vector Nuevo "+ vector1.x + " , "+ vector1.y)
    }

    this.restar = function(vector2){
        Number(this.x -= vector2.x)
        Number(this.y -= vector2.y)
        console.log("Vector Nuevo "+ vector1.x + " , "+ vector1.y)
     }

     this.longitud = function(vector2){ 
       return Math.sqrt((this.x * this.x) + (this.y * this.y))
     }

     this.toString = function (){
        return "x = "+ this.x + " y = " + this.y
     }

     this.valueOf = function (){
        return this.longitud();
     }
}


let vector1 = new Vector(4,5)
let vector2 = new Vector(5,4)

vector1.sumar(vector2)
vector1.restar(vector2)

console.log(vector1.longitud(vector2))

vector1.toString()
