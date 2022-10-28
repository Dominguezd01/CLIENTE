/*
EJERCICIO 39: El salario máximo
Hay un objeto salaries:

let salaries = {

"John": 100,

"Pete": 300,

"Mary": 250

};

Crear la función topSalary(salaries) que devuelva el nombre de la persona mejor pagada.

Si salaries es vacío, debe devolver null.
Si hay varias personas con la mejor paga, devolver cualquiera de ellas.
PD: Utilice Object.entries y desestructuración para iterar sobre pares de claves/valores.
*/

let salaries = {

    "John": 800,
    
    "Pete": 300,
    
    "Mary": 250
    
    };

    const topSalary = (salarios) =>{
        if(Object.entries(salarios) == 0){
            console.log("esta vacio")
            return null
        }
        
        let persona = null
        let sueldoMax = 0;
        for(let [nombre, salario]  of Object.entries(salarios)){
            if([salario>sueldoMax]){
                sueldoMax = salario
                persona = nombre
            }
        }
        
        return persona
    }

    console.log("La persona mejor pagada es: "+ topSalary(salaries))