let map = new Map()
// Adding key of any type
map.set(1, "1");
map.set(true, "bool1")

console.log(map.size);
// get key value in map
console.log(map.get(1));

// check exists or not
console.log(map.has(10));

// keys in map
console.log(map.keys());

// values in map
console.log(map.values());

// delete specific key
map.delete(true);
console.log(map.size);

// clearing entire map
map.clear()
console.log(map.size);
