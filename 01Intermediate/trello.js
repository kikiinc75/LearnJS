// const days = ['Mon', 'Tue', 'wed', 'Thr', 'Fri', 'Sat']

// // console.log(days[0]);

// // days.forEach(function (day, index) {
// //     console.log(`starts with ${index+1} -- ${day}`);
    
// // })

// // const mount = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun']

// // mount.forEach(function(bulan) {
// //     console.log(bulan);
    
// // })

// for (let i = days.length-1; i >=0; i--) {
//     console.log(days[i]);
       
// }

const myTodos = []

myTodos.unshift('Buy bread')
myTodos.unshift('Record video')
myTodos.unshift('Go to gym')

// myTodos.forEach(function (todo,i){
//     console.log(`Your task no. ${i+1} is: ${todo}`);
    
// })
for (let i = 0; i < myTodos.length; i++) {
    console.log(`his is my todo ${myTodos[i]}`);
     
    
}