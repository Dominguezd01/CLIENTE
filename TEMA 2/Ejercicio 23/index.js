let map = new Map();

map.set("name", "John");

// No funcionaba porque no era un array.
let keys = Array.from(map.keys())

console.log(keys)



keys.push("more");
