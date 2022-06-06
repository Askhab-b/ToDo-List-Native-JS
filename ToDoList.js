const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0


const title = document.createElement('p')
title.textContent = 'ToDo List by Askhab'
title.className = 'title'
document.body.append(title)




btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})
// create and delete todo
function createDeleteElements(value) {
    i++
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'Delete'
    li.appendChild(btn)

    //remove toDo
    btn.addEventListener('click', (e) => {
        i--
        total.textContent = i
        result.removeChild(li)
    })

    // toggle class active
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = i

    result.appendChild(li)
}