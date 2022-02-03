const btn = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const MESSAGES =[
    'You can do it',
    'You are beautiful',
    'You are so smart',
    'You are brave',
    'You are funny'
]

const TYPES =[
    'purple',
    'green',
    'red',
    'blue',
    'orange'
]

btn.addEventListener('click',() => createNotification())

function createNotification(message = null,type = null){
    

    const notif =  document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerHTML = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}

function getRandomMessage(){
    return MESSAGES[Math.floor(Math.random()* MESSAGES.length )]
}

function getRandomType(){
    return TYPES[Math.floor(Math.random()* TYPES.length )]
}