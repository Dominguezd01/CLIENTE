let cuenta = {
    nombre: "Alex",
    saldo: 0,
    
    ingresar(cantidad){
        this.saldo += cantidad;
    },
    extraer(cantidad){

        this.saldo -= cantidad;
     
    },

    informar(){
        console.log(this.nombre);
        console.log(this.saldo);
    }
}