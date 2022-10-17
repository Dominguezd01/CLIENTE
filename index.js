function Usuarios (nombre, edad){
    this.nombre = nombre,
    this.edad = edad
}


let newUser = new Usuarios("John", 456)

let users = []

users.push(newUser)
let arraysNewUsers = []
users.map(usuarios => 
            alert(usuarios.nombre + usuarios.edad), 
            arraysNewUsers.push(usuarios)
            )


arrayNewUsers = users.map(usuarios => {
    alert(usuarios.nombre + usuarios.edad);
    return usuarios;

})
                
    

console.log(arraysNewUsers)
arraysNewUsers.map(uusuarios => console.log(uusuarios))