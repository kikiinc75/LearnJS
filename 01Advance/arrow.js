// const sayHello = function (name) {
//     return "Hey there," + name + " !"
// }

// console.log(sayHello('Sammy'));


// const sayHello = (name) => `Hey there ${name}!!`


// console.log(sayHello('Sammy'));


// const todos = [{
//     title: 'Buy bread',
//     isDone: true
// }, {
//     title: 'Go to gym',
//     isDone: true
// }, {
//     title: 'Doing Stuff',
//     isDone: true
// }, {
//     title: 'sleep',
//     isDone: false
// }, {
//     title: 'go to school',
//     isDone: false
// }, {
//     title: 'buy food',
//     isDone: false
// }]

// const thingsNotDone = todos.filter((todo) => todo.isDone === false)

// thingsNotDone.forEach((todo) => console.log(todo.title));

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function () {
        return `This canon camera is of ${this.price}$`
    }
}

console.log(cameras.myDes());

//only for Redux
const func = () => ({ key: 'value' })
console.log(func());
