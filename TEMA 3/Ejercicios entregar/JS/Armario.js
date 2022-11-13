class Armario extends Articulo{
    constructor(cod, desc,fechaAlt,fechaBaja,alto, ancho,fondo){
        super(cod, desc)
        this.alto = alto
        this.ancho = ancho
        this.fondo = fondo
    }

    baja(){
        this.fechaBaja = new Date().toLocaleDateString()
    }

    consulta(){
        console.log(this.elemCode)
        console.log(this.desc)
        console.log(this.fechaAlt)
        console.log(this.fechaBaja)
    }
}