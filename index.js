/*
et student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };

  let c =  JSON.stringify(student)

  console.log(c)

  let b = JSON.parse(c)

  console.log(b)
*/


  let alumno = {
    nombre : "Jose",
    fechaNac: new Date(2000,0,1)
  }

  console.log(alumno)

 console.log(JSON.stringify(alumno))

 console.log(JSON.parse(JSON.stringify(alumno)))