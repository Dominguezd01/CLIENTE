const pedirNum = (num) => {


    if(num == undefined || num == "" ||num == null || isNaN(num)){
        alert("Introduce un vlaor valido")
    }else{
        
        alert(num.toString(4))
    }
}

pedirNum(prompt("Introduce un número"))