onload = () => {
    document.getElementById("formulario1").style = "display: block"
   
}

document.getElementById("formulario1").addEventListener("submit", e =>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    menus(data)
})

const menus = (data) =>{
  // console.log(data.opcion)
    let inventario = []
   switch(data.opcion){
        case "1":
            menuAltas(inventario)
            break
        case 2:

   }
}

const menuAltas = (inventario) =>{
    document.getElementById("formulario1").style = "display: none"
    document.getElementById("formularioAltas").style = "display: block"
    document.getElementById("formularioAltas").addEventListener("submit", e =>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        console.log(data)
        let elemCode, desc, fechaAlt, fechaBaja; 

        if(data.cod ==""){
            changeColor("codigo")
        }else{
            elemCode = data.cod
            changeColortoGreen("descripcion") 
        }
        if(data.desc == ""){
            changeColor("descripcion")
        }else{
            desc = data.desc
            changeColortoGreen("descripcion")   
        }
        if(data.fechaAlt == "" ||  new Date (data.fechaAlt) > new Date()){
            changeColor("fechaAlt")
        }else{
            fechaAlt = data.fechaAlt
            changeColortoGreen("fechaAlt")
        }
        if(data.fechaBaja == "" ||  new Date (data.fechaBaja) < new Date()){
            changeColor("fechaBaja")
        }else{
            fechaBaja = data.fechaBaja
            changeColortoGreen("fechaBaja")
        }

        if(elemCode != "" && desc != "" || fechaAlt!="" && fechaBaja !=""){
            gestionInventario(inventario, new Articulo(elemCode, desc, fechaAlt, fechaBaja))
        }


    })

}
const changeColor =(idElement) =>{
    let elemento = document.getElementById(idElement)
    elemento.style= "border: solid 1px red;"
}

const changeColortoGreen =(idElement) =>{
    let elemento = document.getElementById(idElement)
    elemento.style= "border: solid 1px limegreen;"
}

const gestionInventario = (inventario, item) =>{
    inventario.push(item)
    console.log(inventario)
} 

