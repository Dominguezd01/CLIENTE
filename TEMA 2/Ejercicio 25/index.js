let salarios = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  const sumSalarios = (salarios) =>{

    for (element of Object.values(salarios)){
        element += Object.values(salarios)
        console.log(element)
    }


  }

  sumSalarios(salarios)
  //alert( sumSalarios(salarios) ); 
  