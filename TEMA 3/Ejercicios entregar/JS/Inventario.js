class Articulo{
    constructor(elemCode, desc, fechaAlt, fechaBaja = undefined){
        this.elemCode = elemCode
        this.desc = desc
        this.fechaAlt = fechaAlt
        this.fechaBaja = fechaBaja
    }

    static añadir(inventario, data){
        if(inventario.length == 0 || inventario == "undefined"){
            inventario.push(new Articulo(data.cod, data.desc, new Date().toLocaleDateString())) 
            return inventario
        }else{
            for(let i = 0; i<inventario.length;i++){
    
                if(inventario[i].elemCode != data.cod){
                    console.log(inventario)
                    inventario.push(new Articulo(data.cod, data.desc, new Date().toLocaleDateString())) 
                    return inventario
                }else{
                    let labelAltas = document.getElementById("errorAltas")
                    labelAltas.innerHTML = "Codigo ya existente"
                    labelAltas.style = "display: block; color: red"
                }
            }
        }     
    } 

    static darBaja(inventario, data){
        let rango = inventario.length
        for(let i = 0; i<rango;i++){
            if(inventario[i].elemCode == data){
                inventario[i].fechaBaja = new Date().toLocaleDateString()
                console.log(arrayInventario)
                return inventario
            }else{
               let input = document.getElementById("codigoBaja")
               input.style ="border: solid 1px red"
               document.getElementById("volverBajas").style = "display: block"
            }
        } 
    } 
    
    static consultarInventario(inventario ){
        let table = document.getElementById("tablaInventario")
        table.innerHTML ="<tr><td>Código</td><td>Descripcion</td><td>Fecha alta</td><td>Fecha Baja</td></tr>"
        inventario.forEach(element => {
            table.innerHTML += `<td>${element.elemCode}</td><td>${element.desc}</td><td>${element.fechaAlt}</td><td>${element.fechaBaja}</td></tr>`
        });

        document.getElementById("botonVolverInventario").onclick = ()=>{
            table.style.display = "none"
            document.getElementById("h1Inventario").style.display = "none"
            document.getElementById("formulario1").style.display = "block"
            document.getElementById("botonVolverInventario").style.display ="none"
        }
    }

    static consultarElemento(inventario, code){
        return inventario.find(element => element.codeElem == code)
    }
}

