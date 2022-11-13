class Armario extends Articulo{
    constructor(cod, desc,fechaAlt,fechaBaja,alto, ancho,fondo){
        super(cod, desc, fechaAlt, fechaBaja)
        this.alto = alto
        this.ancho = ancho
        this.fondo = fondo
    }

    baja(){
        this.fechaBaja = new Date().toLocaleDateString()
    }

    consulta(){
       let tabla =  document.getElementById("tablaEncontrarArmario")
        tabla.style.display = "block"
        tabla.innerHTML = `<tr><td>Codigo</td><td>Descripcion</td><td>Fecha Alta</td><td>Fecha Baja</td><td>Alto</td><td>Ancho</td><td>Fondo</td></tr><tr><td>${this.elemCode}</td><td>${this.desc}</td><td>${this.fechaAlt}</td><td>${this.fechaBaja}</td><td>${this.alto}</td><td>${this.ancho}</td><td>${this.fondo}</td></tr>`
    }
}