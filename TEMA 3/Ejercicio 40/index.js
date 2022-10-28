let suma = 0;
const sumTo = (sumaRes,num) =>{
    
    if(num == 0){
        return 0
    }else{
        sumaRes += sumTo(sumaRes,num -1)
        return sumaRes
    }
 
}

sumTo(suma,5)