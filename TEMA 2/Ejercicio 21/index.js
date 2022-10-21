let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const unicoValores = (values) =>{
  unicos = new Set(values)

  console.log(unicos)

  unicos.forEach(element => {
    alert(element)
  });

  return Array.from(unicos)
}

let valuesUnicos = unicos(values)

console.log(valuesUnicos)
//alert( unicos(values) ); // Hare, Krishna, :-O
