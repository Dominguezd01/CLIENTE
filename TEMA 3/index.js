let user = {
    name: "John Smith",
    age: 36
}

let userToJson = JSON.stringify(user)

console.log(userToJson)

let stringifyToObject = JSON.parse(userToJson)

console.log(stringifyToObject)