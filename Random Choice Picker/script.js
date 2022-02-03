const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if (e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split('-').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText= tag
        tagsEl.appendChild(tagEl)

    })
}
function randomSelect(){
    const times = 20
    // shifting it to each one (highlight and unhighlight)
    const interval = setInterval(() => {
        const randomtag = pickRondomTag()
        console.log(randomtag)
        highlightTag(randomtag)
        setTimeout(() => {
            unhighlightTag(randomtag)
        }, 100);    

    }, 100);
    // stoping it and choise a random tag and highlighting it
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomtag = pickRondomTag()
            highlightTag(randomtag)
        }, 100);
    }, times*100);
}

function pickRondomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}