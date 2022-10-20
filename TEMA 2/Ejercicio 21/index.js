let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unicos(values){
  unicos = new Set(values)

  console.log(unicos)

  unicos.forEach(element => {
    alert(element)
  });
}

unicos(values)
//alert( unicos(values) ); // Hare, Krishna, :-O
