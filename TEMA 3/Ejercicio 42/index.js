/*
    Fibonacci
*/
const fibo = (n) =>{
    if(n == 0 || n == 1){
        return 1
    }else if(n == 2){
        return 2
    }
    return fibo(n-1) + fibo(n-2)
}



console.log(fibo(50))
console.log(fibo(6))


