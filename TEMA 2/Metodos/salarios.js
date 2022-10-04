let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    sumaTotal() {
        let suma = 0
        for (prop in this) {
            if (this[prop] == true || this[prop] == false || isNaN(this[prop])) {
                continue;
            } else {
                suma += this[prop]
            }
        }
        console.log(suma)
    }
}

salaries.sumaTotal()