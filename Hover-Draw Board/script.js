const container = document.getElementById('container')
const hover = document.getElementById('hover')
const draw = document.getElementById('draw')


const colors = ['#e74c3c','#8e44as','#3498db','#e67e22','#2ecc71','#3fbcc5','#e1f012','#d612f0','#6012f0']
const SQUARES = 660

newSquare()

draw.addEventListener('click',()=>{
    reset()
    const squares = document.querySelectorAll('.square')
    squares.forEach(e => {
        e.addEventListener('mouseover',() => setColor(e))
    });
})

hover.addEventListener('click',()=>{
    reset()
    const squares = document.querySelectorAll('.square')
    squares.forEach(e => {
        e.addEventListener('mouseover',() => setColor(e))
        e.addEventListener('mouseout',() => removeColor(e))
    });
    
})

function newSquare(){
    for(let i = 0;i<SQUARES;i++) {
        const square =document.createElement('div')
        square.classList.add('square')    
        container.appendChild(square)
    }
}

function removeSquare(){
        const squares = document.querySelectorAll('.square') 
        squares.forEach(e => {
            container.removeChild(e)
        });
}
function reset(){
    removeSquare()
    newSquare()
}
function setColor( element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px #000`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
}

function getRandomColor() {
    return colors[Math.floor(Math.random()* colors.length)]
}