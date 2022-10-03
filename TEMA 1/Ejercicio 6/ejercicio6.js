


function trianguloFuncionClasica(numLineas) {
  let triangulo = ""
  if (isNaN(numLineas)|| numLineas < 0||numLineas == ""||numLineas == null) {
    alert("Solo se admiten valores enteros positivos");
  } else {
    for (let l = 0; l <= numLineas; l++) {
      if (numLineas == 0) {
        numLineas = 7;
      } else
        document.body.innerHTML += `${triangulo}<br/>`;
        triangulo += "#";
    }
  }
}

let trianguloFuncionVariable = function (numLineas) {
  let triangulo = ""
  if (isNaN(numLineas)|| numLineas < 0||numLineas == ""||numLineas == null) {
    alert("Solo se admiten valores enteros positivos");
  } else {
    for (let l = 0; l <= numLineas; l++) {
      if (numLineas == 0) {
        numLineas = 7;
      } else
        document.body.innerHTML += `${triangulo}<br/>`;
        triangulo += "#";
    }
  }
}

const trianguloFuncionFlecha = (numLineas) =>{
  let triangulo = ""
  if (isNaN(numLineas)|| numLineas < 0||numLineas == ""||numLineas == null) {
    alert("Solo se admiten valores enteros positivos");
  } else {
    for (let l = 0; l <= numLineas; l++) {
      if (numLineas == 0) {
        numLineas = 7;
      } else
        document.body.innerHTML += `${triangulo}<br/>`;
        triangulo += "#";
    }
  }
}


trianguloFuncionClasica(prompt("indica el número de # que aparecen en la última línea"))

trianguloFuncionVariable(prompt("indica el número de # que aparecen en la última línea"))

trianguloFuncionFlecha(prompt("indica el número de # que aparecen en la última línea"))
