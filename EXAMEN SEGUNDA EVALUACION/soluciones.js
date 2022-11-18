
const muestraSalario = (mapPersonas, mapSalarios) => {
    mapPersonas.forEach( e => {
        console.log("Ej1")
        console.log(mapPersonas.keys(), mapPersonas.values())
        console.log(mapSalarios.keys(), mapSalarios.values())
    });
}

let mapPersonas = new Map().set("71799254Q", "Miguel").set("71799255Q", "María")
let mapSalarios = new Map().set("71799254Q", 3500).set("71799255Q", 7500)

muestraSalario(mapPersonas,mapSalarios)




const alamcenaPersonas = (mapPersonas) => {
    console.log(JSON.stringify(mapPersonas))
     
    let guardarDatos = JSON.stringify(Array.from(mapPersonas.entries()));
    localStorage.setItem("mapPersonas",guardarDatos)
}


alamcenaPersonas(mapPersonas)

const recuperaPersonas = () => {
    let mapPersonasRecuperado = JSON.parse(localStorage.getItem("mapPersonas"))
    return mapPersonasRecuperado
}

console.log(recuperaPersonas())


class Empleo{
    
    constructor(sueldoMensual, categoria, fecha){
        const salarioMinimo = 1000
        if(sueldoMensual >= salarioMinimo){
            this.sueldoMensual = sueldoMensual
            this.categoria = categoria
            this.fecha = new Date(fecha).toLocaleDateString()
        }else{
            this.sueldoMensual = salarioMinimo
            this.categoria = categoria
            this.fecha = new Date(fecha).toLocaleDateString()
        }
    }

    sueldoHoras(horas){
        return this.sueldoMensual/40*horas
    }
}

class Escultor extends Empleo{
    constructor(sueldoMensual, fecha){
        super(sueldoMensual,"escultor",fecha)
    }
}

let oferta = {
    empleos: [],
    insertar(categoria, sueldo){
        this.empleos.push(new Empleo(sueldo,categoria, new Date()))
    },
    buscarEmpleos(categoriaEmpleo){
       this.empleos.forEach(element => {
            if(element.categoria == categoriaEmpleo){
                alert(`${element.categoria}\n${element.sueldoMensual}`)
            }
       });
    },
    eliminarEmpleos(categoriaEmpleo){
        for(let i = 0; this.empleos.length-1; i++){
            if(this.empleos[i].categoria == categoriaEmpleo){
                this.empleos.slice(i, 1)
            }else{
                alert("No encontrado")
                break
            }
          
        }
    },
    sueldosMaximos(){
        let mapSueldos = new Map()
        this.empleos.forEach(element => {
            mapSueldos.set(element.categoria, element.sueldoMensual)
        })
      alert(mapSueldos)
        
    }
}

oferta.insertar("maderero", 12312213)
oferta.insertar("policia", 12312)
oferta.insertar("nose", 123122313)
oferta.insertar("otra cosa", 12312213)
//oferta.buscarEmpleos("policia")
//oferta.sueldosMaximos()



const menu = () => {
    let salir = false
    while(!salir){
       let opcion =  prompt("Elige una opcion\n1. Insertar Empleos\n2. Buscar Empleos\n3. Eliminar Empleos\n4. Sueldos Maximos\n0. Salir")
       if(opcion == "" || opcion == null || opcion == undefined){
            continue
       }else{
            switch(opcion){
                case "0": 
                    alert("Adios")
                    salir = true
                    break
                case "1":
                    oferta.insertar(prompt("Introduce la categoria"), prompt("Introduce el sueldo"))
                    break
                case "2":
                    oferta.buscarEmpleos(prompt("Introduce la categoría"))
                    break
                case "3":
                    alert("no funciona, no se por que")
                    break
                case "4":
                    oferta.sueldosMaximos()
                    break
                default: 
                    alert("Vuelve a intentarlo")
            }
       }
    }
}
//menu()