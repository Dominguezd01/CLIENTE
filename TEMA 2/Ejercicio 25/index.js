let salarios = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  const sumSalarios = (salarios) =>{
    let suma = 0
    for (element of Object.values(salarios)){
       suma += element
        console.log(suma)
    }
  }

  sumSalarios(salarios)
  //alert( sumSalarios(salarios) ); 
  