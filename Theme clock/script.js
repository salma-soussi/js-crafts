const btn_dark = document.querySelector(".toggle")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")


const days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months =["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]

btn_dark.addEventListener('click',(e)=>{
    var root = document.getElementsByTagName( 'html' )[0];
    root.classList.toggle('dark')
    if(root.classList.contains('dark')){
        e.target.innerHTML= 'Light mode'
    }else{
        e.target.innerHTML='Dark mode'
    }
}) 

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML =`${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

function scale(num,in_min,in_max,out_min,out_max){
    return (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min ;
}

setTime()

setInterval(setTime , 1000)