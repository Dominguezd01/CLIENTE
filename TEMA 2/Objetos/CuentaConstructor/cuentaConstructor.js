function Cuenta (titular, saldo){
    this.titular = titular
    this.saldo = saldo

    this.ingresar = function(cantidad){
        this.saldo += cantidad
    }
    this.retirar = function(cantidad){
        this.saldo -= cantidad
    }

    this.informar = function(){
        console.log("El titular es: " + this.titular)
        console.log("El saldo de la cuenta es:  " + this.saldo+ "€")
    }
}

let miCuenta = new Cuenta("Pipo", 120);
miCuenta.informar()
miCuenta.ingresar(150)
miCuenta.informar()

miCuenta.retirar(150)
miCuenta.informar()