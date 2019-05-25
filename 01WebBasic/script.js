// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0]);

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I have changed using JS'


const myPElement = document.querySelectorAll('p')

myPElement.forEach(p => p.textContent = 'i am changed using foreach loop')

const myPara = document.createElement('p')

myPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myPara)

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was clicked'

})

//track input form

document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);

})