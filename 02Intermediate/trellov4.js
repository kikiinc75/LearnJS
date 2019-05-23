const myTodos = ['Buy Bread', 'Go to gym', 'Record video youtube']
//console.log(myTodos.indexOf('Buy Bread'));


const newTodos = [{
    title: 'Buy bread',
    isDone: false
}, {
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Record video youtube',
    isDone: false
}]

// const index = newTodos.findIndex(function(todo,index){
//     console.log(todo);

//     return todo.title === 'Go to Gym'
// })
// console.log(index);

//method 1
// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodo(newTodos, 'Go To Gym')
// console.log(printMe);

//method 2
const findTodo = function (myTodos, title) {
    const titleReturned = myTodos.find(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To Gym')
console.log(printMe);