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
        console.log(cuenta.nombre);
        console.log(cuenta.saldo);
    }
}