let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


const recorrerObjeto = (list) => {
    if(!list){
        console.log("Nope")
    }
    console.log(list.value); 
  
    if (list.next) {
      recorrerObjeto(list.next); 
    }
  
}
  
  recorrerObjeto(list)
