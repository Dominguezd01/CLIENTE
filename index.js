let student = {
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