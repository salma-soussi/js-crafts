const form  = document.getElementById('form')
const input  = document.getElementById('input')
const todosUL  = document.getElementById('todos')

// get from local storage
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}

form.addEventListener('submit',e=>{
 e.preventDefault()
 addTodo()
})

todosUL.addEventListener('toggle',()=>{
    
})

function addTodo(todo){
    let todoText = input.value
    if(todo){
        todoText = todo.text
    }
    if(todoText){
        const li = document.createElement('li')
        if (todo && todo.completed) {
            li.classList.add('completed')
        }
        
        li.addEventListener('click',()=> {
            li.classList.toggle('completed')
            updateLocalStorage()
        })
        li.addEventListener('contextmenu',e => {
            e.preventDefault()
            li.remove()
            updateLocalStorage()
        })

        li.innerText = todoText
        input.value = ''
        todosUL.insertBefore(li,todosUL.firstChild)
        updateLocalStorage()
    }
}

function updateLocalStorage(){
    const todosEL = document.querySelectorAll('li')

    const todos = []

    todosEL.forEach(todoEl => {
        todos.unshift({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos',JSON.stringify(todos))
}