let form =  document.getElementById("form")
let listaTexto = document.getElementById("listaTexto")

form.addEventListener("submit", e =>{
    e.preventDefault()  
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    imprimirLista(data.texto)
    form.texto.value = ""
})


const imprimirLista = (texto) =>{
    if(texto == ""){
        document.getElementById("labelError").innerHTML ="El texto no puede estar vacio"
        document.getElementById("labelError").style = "display: block; color:red"
    }else{
    document.getElementById("labelError").style = "display: none"
    let li = document.createElement("li")
    li.innerHTML =texto
    listaTexto.appendChild(li)
    }
}