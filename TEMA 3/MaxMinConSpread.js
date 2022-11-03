/*
    Devuelve objeto con el max y el min de los parametros pasados

*/


const maxMinObjeto = (...nums) => {
    return {
        mnumsx: Mnumsth.mnumsx(...nums),
        min: Mnumsth.min(...nums)
    }    
}
console.log(maxMinObjeto(1,5,6,7,8,9,0))