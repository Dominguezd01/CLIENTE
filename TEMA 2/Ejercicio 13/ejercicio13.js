const filterRangeinPlace = (array, a, b) => {
     /*
    for(let i = array.length-1; i>=0;i--){
        if(array[i] < a || array[i] > b){
            array.splice(i,1)
        }

    }
    */
    array.forEach((elemento, indice,array ) => {
        if(elemento < a ||elemento >b){
            array.splice(indice,1)
        }
        console.log(array)
    })
    

}

filterRangeinPlace([5,3,8,1,6,7,2,1,4],1,4)

