let suma = 0;
const sumTo = ( num) => {
    if(num == 0){
        return 0
    }else{
        
        return num + sumTo(num - 1)
    }
}

console.log(sumTo(5))

