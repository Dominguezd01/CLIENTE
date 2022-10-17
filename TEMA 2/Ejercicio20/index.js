let john = { nombre: "John", apellido: "Smith", id: 1 };
let pete = { nombre: "Pete", apellido: "Hunt", id: 2 };
let mary = { nombre: "Mary", apellido: "Key", id: 3 };


let usuarios = [ john, pete, mary ];

const ordenar = (usuarios) => {
    let usuariosMapeados = []
    usuarios.map((usuario) => usuariosMapeados.push({nombreCompleto: usuario.nombre +" "+  usuario.apellido,id: usuario.id}) )
    return usuariosMapeados
}

console.log(ordenar(usuarios))