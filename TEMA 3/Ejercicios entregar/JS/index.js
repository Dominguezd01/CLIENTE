onload = () => {
    document.getElementById("formulario1").style = "display: block"
    document.getElementById("volver").style = "display: none"

}
var arrayInventario = []
document.getElementById("formulario1").addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    menus(data)
})

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

    }
}

const menuAltas = () => {
    let formAltas = document.getElementById("formularioAltas")
    formAltas.style.display = "block"
    document.getElementById("formulario1").style = "display: none"
    document.getElementById("formularioAltas").addEventListener("submit", e => {
        e.preventDefault()
        let labelAltas = document.getElementById("errorAltas")
        labelAltas.innerHTML = "Codigo ya existente"
        labelAltas.style = "display: none; color: red"
        const data = Object.fromEntries(new FormData(e.target))
        console.log(data)
        let elemCode, desc, fechaAlt;

        if (data.cod == "") {
            changeColor("codigo")
        } else {

            changeColortoGreen("descripcion")
        }
        if (data.desc == "") {
            changeColor("descripcion")
        } else {
            desc = data.desc
            changeColortoGreen("descripcion")
        }
        if (data.cod != "" && data.desc != "") {
            arrayInventario = Articulo.añadir(arrayInventario, data)
            console.log(arrayInventario)
            let formAltas = document.getElementById("formularioAltas")
            formAltas.cod.value= ""
            formAltas.desc.value= ""
            formAltas.fechaAlt.value= ""
        }
    })
    document.getElementById("volver").style.display = "block"

    document.getElementById("volver").onclick = () => {
        formAltas.style.display = "none"
        document.getElementById("formulario1").style.display = "block"
        document.getElementById("volver").style.display = "none"
        formAltas.cod.value= ""
        formAltas.desc.value= ""
        formAltas.fechaAlt.value= ""
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
    document.getElementById("formulario1").style.display = "none"
    document.getElementById("volver").style.display = "none"
    let volverBajas = document.getElementById("volverBajas")
    volverBajas.style.display = "block"
    volverBajas.onclick = () => {
        volverBajas.style.display = "none"
        formBajas.style.display = "none"
        document.getElementById("formulario1").style.display = "block"
    }
    formBajas.addEventListener("submit", e => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        console.log(data)
        Articulo.darBaja(arrayInventario, data.cod)
    })
} 

const mostrarInventario = () =>{
    let h1Inventario = document.getElementById("h1Inventario")
    let table = document.getElementById("tablaInventario")
    let botonVolverInventario = document.getElementById("botonVolverInventario")
    h1Inventario.style.display = "block"
    table.style.display = "block"
    botonVolverInventario.style.display = "block"
    
    document.getElementById("formulario1").style.display = "none"
    Articulo.consultarInventario(arrayInventario)
}

const mostrarBuscarElemento = () =>{
    let formulario = document.getElementById("formularioEncontrar")
    formulario.style.display = "block"
    document.getElementById("formulario1").style.display = "none"
    formulario.addEventListener("submit", e =>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        console.log(data)
        const devuelto =  Articulo.consultarElemento(data)

        let tablaEncontrar = document.getElementById("tablaEncontrar")
        tablaEncontrar.innerHTML += `<td>${devuelto.elemCode}`
    })
}

