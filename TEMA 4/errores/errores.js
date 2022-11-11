/*

•	Escribe el código para::
•	Lanzar un error dentro de try
•	Un return dentro del try
•	Lanzar un error dentro del catch
•	Un return dentro del catch
•	¿En qué casos NO se ejecuta el código de finally?


*/

const ej1a = () =>{
    try{
        alert(x)
        throw error
    }catch(err){
        alert(err.name)
    }
}
const ej1b = () =>{
    try{
        alert(x)
        return error
    }catch(err){
        alert(err.name)
    }
}
const ej1c = () =>{
    try{
        alert(x)
    }catch(err){
        throw err     
    }
}
const ej1d = () =>{
    try{
        alert(x)
    }catch(err){
        return err     
    }
}

//ej1a()
alert(ej1d())