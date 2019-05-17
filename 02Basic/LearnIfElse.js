// if (false) {
//     console.log('I am MR.Stark')
// } else if(true){
//     console.log("It's Learning")
// } 
// else {
//     console.log('I am Capt America')
// }

var whoIsHere = ''

if (whoIsHere === 'user') {
    console.log('Greeding Message For '+whoIsHere)
} else if(whoIsHere === 'teacher'){
    console.log('Sorry This is just form User')
} else{
    console.log('MESSAGE:Please verify your Email')
}

// Grade problem

// student mark:

// 10 - Amazing
// 5 - Good
// 3 - poor
// 0 - fail
var Grade = 3
var student = 'mark'
var problem = ''

if (Grade == 10) {
    problem = 'Amazing'
    console.log('your name '+ student + 'you have score '+ Grade + 'you was '+problem)
}else if (Grade == 5) {
    problem = 'Good'
    console.log('your name '+ student + 'you have score '+ Grade + 'you was '+problem)
}else if (Grade == 3) {
    problem = 'Poor'
    console.log('your name '+ student + 'you have score '+ Grade + 'you was '+problem)
}else{
    problem = 'Fail'
    console.log('your name '+ student + 'you have score '+ Grade + ' '+'you was '+problem)
}