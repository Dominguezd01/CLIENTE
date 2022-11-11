onload = () => {
    document.getElementById("formulario1").style = "display: block"
    document.getElementById("volver").style = "display: none"

}
let arrayInventario = [""]
document.getElementById("formulario1").addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    menus(data)
})

const mostrarMenu = () =>{
    document.getElementById("formulario1").style = "display: block"
}

const ocultarMenu = () =>{
    document.getElementById("formulario1").style = "display: none"
}
const menus = (data) => {
    document.getElementById("formulario1").style.display = "block"

    console.log(data.opcion)
    switch (data.opcion) {
        case "1":
            menuAltas()
            break
        case "2":
            menuBajas()
            break
        case "3":
            mostrarInventario()
            break
        case "4":
            mostrarBuscarElemento()
            break
        case "5":
            mostrarBuscarDesc()
            break

    }
}

const menuAltas = () => {
    let formAltas = document.getElementById("formularioAltas")
    formAltas.style.display = "block"
    ocultarMenu()
    document.getElementById("formularioAltas").addEventListener("submit", e => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        let labelAltas = document.getElementById("errorAltas")

        labelAltas.style = "display: none; color: red"

        if (data.cod == "") {
            labelAltas.innerHTML = "Introduce los valores correctamente"
            labelAltas.style.display = "block"
        }
        if (data.desc == "") {
            labelAltas.innerHTML = "Introduce los valores correctamente"
            labelAltas.style.display = "block"
        }
        if (data.cod != "" && data.desc != "") {
            arrayInventario = Articulo.añadir(arrayInventario, data)
        }
        let formAltas = document.getElementById("formularioAltas")
        formAltas.cod.value= ""
        formAltas.desc.value= ""
        formAltas.fechaAlt.value= ""
    })
    document.getElementById("volver").style.display = "block"

    document.getElementById("volver").onclick = () => {
        formAltas.style.display = "none"    
        document.getElementById("volver").style.display = "none"
        mostrarMenu()
    }

}

const changeColor = (idElement) => {
    let elemento = document.getElementById(idElement)
    elemento.style = "border: solid 1px red;"
}

const changeColortoGreen = (idElement) => {
    let elemento = document.getElementById(idElement)
    elemento.style = "border: solid 1px limegreen;"
}


const menuBajas = () => {
    let formBajas = document.getElementById("formularioBajas")
    formBajas.style = "display: block"
    ocultarMenu()
    let volverBajas = document.getElementById("volverBajas")
    volverBajas.style.display = "block"
    volverBajas.onclick = () => {
        volverBajas.style.display = "none"
        formBajas.style.display = "none"
        mostrarMenu()
    }
    formBajas.addEventListener("submit", e => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        console.log(data.cod)
        Articulo.darBaja(arrayInventario, data.cod)

    })
} 

const mostrarInventario = () =>{
    let h1Inventario = document.getElementById("h1Inventario")
    let table = document.getElementById("tablaInventario")
    let botonVolverInventario = document.getElementById("botonVolverInventario")
    ocultarMenu()
    h1Inventario.style.display = "block"
    botonVolverInventario.style.display = "block"
    Articulo.consultarInventario(arrayInventario)

    document.getElementById("botonVolverInventario").onclick = ()=>{
        table.style.display = "none"
        document.getElementById("h1Inventario").style.display = "none"
        document.getElementById("formulario1").style.display = "block"
        document.getElementById("botonVolverInventario").style.display ="none"
        document.getElementById("errorInvetario").style.display ="none"
    }
}

const mostrarBuscarElemento = () =>{
    let formulario = document.getElementById("formularioEncontrar")
    formulario.style.display = "block"
    let botonVolverEncontrar = document.getElementById("botonVolverEncontrar")
    botonVolverEncontrar.style.display = "block"
    botonVolverEncontrar.onclick = () =>{
        document.getElementById("formulario1").style.display = "block"
        document.getElementById("volver").style.display = "none"
        formulario.style.display = "none"
        botonVolverEncontrar.style.display = "none"
        document.getElementById("tablaEncontrar").style.display = "none"
        document.getElementById("errorEncontrar").style = "display:none"
    }
    ocultarMenu()
    formulario.addEventListener("submit", e =>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target)) 
        const devuelto = Articulo.consultarElemento(arrayInventario,data.cod)
        formulario.cod.value=""
        if(devuelto == undefined){
            let etiqueta = document.getElementById("errorEncontrar")
            etiqueta.style = "display:block; color:red"
            etiqueta.innerHTML ="Codigo no encontrado"
        }else{
            let etiqueta = document.getElementById("errorEncontrar")
            etiqueta.style.display = "none"
            let tablaEncontrar = document.getElementById("tablaEncontrar")
            tablaEncontrar.style.display = "block"
            tablaEncontrar.innerHTML += `<tr><td>${devuelto[0].elemCode}</td>
                                            <td>${devuelto[0].desc}</td>
                                            <td>${devuelto[0].fechaAlt}</td>
                                            <td>${devuelto[0].fechaBaja}</td>`
        }


    })

}

const mostrarBuscarDesc = () =>{
    let formulario = document.getElementById("formularioEncontrarDesc")
    formulario.style.display = "block"
    let botonVolverEncontrar = document.getElementById("botonVolverEncontrarDesc")
    botonVolverEncontrar.style.display = "block"
    botonVolverEncontrar.onclick = () =>{
        document.getElementById("formulario1").style.display = "block"
        document.getElementById("volver").style.display = "none"
        formulario.style.display = "none"
        botonVolverEncontrar.style.display = "none"
        document.getElementById("tablaEncontrarDesc").style.display = "none"
        document.getElementById("errorEncontrarDesc").style = "display:none"
    }
    ocultarMenu()
    formulario.addEventListener("submit", e =>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        const devuelto = Articulo.consultarElementoDesc(arrayInventario,data.cod)
        console.log(devuelto)
        formulario.cod.value=""
        if(devuelto == undefined){
            let etiqueta = document.getElementById("errorEncontrarDesc")
            etiqueta.style = "display:block; color:red"
            etiqueta.innerHTML ="Descripcion no encontrada"
        }else{
            let etiqueta = document.getElementById("errorEncontrarDesc")
            etiqueta.style.display = "none"
            let tablaEncontrar = document.getElementById("tablaEncontrarDesc")
            tablaEncontrar.style.display = "block"
            tablaEncontrar.innerHTML += `<tr><td>${devuelto[0].elemCode}</td>
                                            <td>${devuelto[0].desc}</td>
                                            <td>${devuelto[0].fechaAlt}</td>
                                            <td>${devuelto[0].fechaBaja}</td>`
        }


    })

}



