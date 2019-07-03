// function myValidation() {
//     let myValue = document.getElementById('myform').value;

//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//         let check = 'Not a valid input'
//         const myPElement = document.querySelector('p')
//         myPElement.textContent = check
//     } else {
//         document.getElementById('idone').textContent = 'this is ok'
//     }
// }

//form validaton

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    if (event.target.password.value === event.target.confirmPass.value) {
        console.log(event.target.password.value);
    } else {
        console.log('sorry password not match');

    }
    event.target.username.value = ''
    event.target.email.value = ''
    event.target.password.value = ''
    event.target.confirmPass.value = ''
})