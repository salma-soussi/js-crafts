const btnGenerator = document.getElementById('generate')
const btnClipboard = document.getElementById('clipboard')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const lengthEl = document.getElementById('length')
const resultEl = document.getElementById('result')
const container = document.querySelector('.result-container')

const randomFuc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
}

btnGenerator.addEventListener('click',()=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

btnClipboard.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    const span = document.createElement('span')
    const password = resultEl.innerText

    if(!password){ return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    container.appendChild(span)
    span.classList.add('tooltiptext')
    span.innerText = "Copied"
    setTimeout(()=> {span.remove()}, 500);
})

function generatePassword (lower,upper,number,symbol,length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArray = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
   
    if(typesCount === 0){
        return ''
    }
    
    for( let i = 0 ; i < length ; i += typesCount ){
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFuc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '.,/<>=[]{}()*&#^%$@!?'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

