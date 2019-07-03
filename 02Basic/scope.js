// let iAmGlobal = 'someValue'

// if (true){
//     //var can call out from {}
//     var iAmLocal = 'someMoreValue'
//     iAmGlobal = 'Mr.Stark'
//     console.log(iAmGlobal);
//     console.log(iAmLocal);    
// }

// console.log(iAmLocal);
// console.log(iAmGlobal);

let king = 'John'

if (true) {
    let king = 'sam'
    
    if (true) {
        let king = 'Ram'
        console.log(king);
        
    }
}
if (true){
    console.log("I am second part "+king);
    
}