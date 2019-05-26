var john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

var mary = {
    name: 'I am Mary',
    age: 23,
    isActive: true
}

var sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john', john)
users.set('mary', mary)
users.set('sam', sam)

// console.log(users.size);

// console.log(users.get('sam'));

// console.log(users.values());

for (const value of users.values()) {
    // console.log(value.name);

}

for (const [key, value] of users.entries()) {
    // console.log(key + ' = ' + value.name);

}
// users.forEach((value, key) => console.log(key + ' = ' + value.name))

var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrofArr)

// newMap.forEach((value, key) => console.log(value + ' = ' + key))

for (const [key, value] of newMap) {
    console.log(`${value} = ${key}`);

}