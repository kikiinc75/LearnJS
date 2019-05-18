let sayHello = function (name) {
    console.log("Greeding message for user");
    console.log(`Hey ${name}`);
    
}

// sayHello('John')

let fullNameMaker = function(firstName, lastName) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you ${firstName} ${lastName}`);
    
}

//fullNameMaker('Wahyu', 'iqbal')

let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}

// result = myAdder(2 , 3)
// console.log(result);

let myMultiplier = function(num1 , num2) {
    return num1 * num2
}

let guestUser = function(name = 'unName', courseCount = 0) {
    return 'Hello ' + name + ' and your course code is: ' + courseCount 
}

console.log(guestUser('John', 1));
