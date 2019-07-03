// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello world!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

// var val = 5

// while (val > 0) {
//     console.log(val);
//     val--
// }
var ul = document.getElementById('list')
var li;


var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)
var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)
var allButton = document.getElementById('removeAll')
allButton.addEventListener('click', allRemove)

function addItem() {
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        let p = document.createElement('p')
        p.textContent = 'Enter your todo'
        input.insertAdjacentElement('afterend', p)
        return false
        //add p tag and assign a value of "Enter your todo"
    } else {
        //create li
        li = document.createElement('li')
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')
        //create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item') //optional
        //add these element on web page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual'
        }, 1);
        input.value = ''

    }
}
function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }

}
function allRemove() {
    li = ul.children
    ul.remove()
}