const ul = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')
fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks')
    .then(response => response.json())
    .then(data => data.data.forEach((item) => {
        const li = document.createElement('li')
        const checkbox = document.createElement('input');
        li.appendChild(checkbox)
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (event) => {
            const parent = event.target.parentNode
            if (event.target.checked) {
                parent.classList.add('completed')
            } else {
                parent.classList.remove('completed')
            }
        })
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button')
        deleteBtn.addEventListener('click', (e) => {
            ul.removeChild(li)
        })
        li.appendChild(span)
        li.appendChild(deleteBtn)
        deleteBtn.textContent = 'Delete'
        span.textContent = item.text
        ul.appendChild(li)

    }))
    .catch(() =>{
        console.log(error)
    })

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = input.value;


    const li = document.createElement('li')
    const checkbox = document.createElement('input');
    li.appendChild(checkbox)
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', (event) => {
        const parent = event.target.parentNode
        if (event.target.checked) {
            parent.classList.add('completed')
        } else {
            parent.classList.remove('completed')
        }
    })
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', (e) => {
        ul.removeChild(li)
    })
    li.appendChild(span)
    li.appendChild(deleteBtn)
    deleteBtn.textContent = 'Delete'
    span.textContent = value
    ul.appendChild(li)
    input.value = '';
    input.focus()

})