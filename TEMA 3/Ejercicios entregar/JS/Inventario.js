class Articulo{
    constructor(elemCode, desc, fechaAlt, fechaBaja = undefined){
        this.elemCode = elemCode
        this.desc = desc
        this.fechaAlt = fechaAlt
        this.fechaBaja = fechaBaja
    }

    static añadir(inventario, data){

        if(inventario[0] == "" ){
            inventario[0] = new Articulo(data.cod, data.desc, new Date().toLocaleDateString())
            return inventario
        }else{
            for(let i = 0; i<inventario.length;i++){
                if(inventario[i].elemCode === data.cod){
                    let labelAltas = document.getElementById("errorAltas")
                    labelAltas.innerHTML = "Codigo ya existente"
                    labelAltas.style = "display: block; color: red"
                    return inventario
                }else{
                    console.log(inventario)
                    inventario.push(new Articulo(data.cod, data.desc, new Date().toLocaleDateString())) 
                    return inventario
                }
            }
        }     
    } 

    static darBaja(inventario, data){
        let rango = inventario.length
        for(let i = 0; i<rango;i++){
            if(inventario[i].elemCode == data){
                if(inventario[i].fechaBaja == undefined){
                    inventario[i].fechaBaja = new Date().toLocaleDateString()
                    let labelBajas = document.getElementById("labelBajas")
                    labelBajas.style = "display: block; color: green"
                    labelBajas.innerHTML ="Item dado de baja"
                    return inventario
                }else{
                    let labelBajas = document.getElementById("labelBajas")
                    labelBajas.style = "display: block; color: green"
                    labelBajas.innerHTML ="Este item ya ha sido dado de baja"
                }
            }else{
               let label = document.getElementById("labelBajas")
               label.style ="display: block; color:red"
               label.innerHTML ="Item no encontrado"
               document.getElementById("volverBajas").style = "display: block"
            }
        } 
    } 
    
    static consultarInventario(inventario ){
        if(inventario[0] != ""){
            let table = document.getElementById("tablaInventario")
            table.style.display ="block"
            table.innerHTML ="<tr><td>Código</td><td>Descripcion</td><td>Fecha alta</td><td>Fecha Baja</td></tr>"
            inventario.forEach(element => {
                table.innerHTML += `<td>${element.elemCode}</td><td>${element.desc}</td><td>${element.fechaAlt}</td><td>${element.fechaBaja}</td></tr>`
            });
        }else{
            let labelInventario =  document.getElementById("errorInvetario")
            labelInventario.style ="display: block; color:red"
            labelInventario.innerHTML = "No hay productos en el inventario"
        }

    }

    static consultarElemento(arrayInventario, code){
        let devolver = arrayInventario.filter(element => element.elemCode == code)
        if(devolver.length == 0){
            return undefined
        }else{
            return devolver
        }
        
    }
    static consultarElementoDesc(arrayInventario, desc){
        let devolver = arrayInventario.filter(element => element.desc == desc)
        if(devolver.length == 0){
            return undefined
        }else{
            return devolver
        }
        
    }
  
}

