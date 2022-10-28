let user = {
    name: "John Smith",
    age: 36
}

let stringifyToObject = JSON.stringify(user)

let newUser = JSON.parse(stringifyToObject)

console.log(newUser)