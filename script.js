const nav = document.querySelector('.nav')
const content = document.querySelector('.content');

const DATES = ['Dec 30, 2021','Oct 11, 2021','Oct 20, 2021','Dec 20, 2021','Oct 15, 2021','Oct 21, 2021','Nov 06, 2021','Dec 24, 2021','Nov 15, 2021','Nov 23, 2021','Nov 28, 2021','Dec 13, 2021','Dec 09, 2021','Oct 03, 2021','Nov 10, 2021']
const HEADERS = ['images/Checkboxes.png','images/Content-Placeholder.png','images/Dad-Jokes.png','images/Feedback-UI-Design.png','images/Hover-Draw-Board.png','images/Incrementing-Counter.png','images/Note-App.png','images/Password-Generator.png','images/Quiz-App.png','images/Random-Choice.png','images/Split-Landing-Page.png','images/Testimonial-Box.png','images/Theme-clock.png','images/Toast-notification.png','images/Todo-list.png']

const TITLES = ['Checkboxes Design','Content Placeholder','Dad Jokes','Feedback UI Design','Hover-Draw Board','Incrementing Counter','Note App','Password  Generator','Quiz App','Random Choice Picker','Split Landing Page','Testimonial Box','Theme clock','Toast notification','Todo list']

const Desc = ['Checkboxes','Content Placeholder','Dad Jokes','Feedback UI Design','Hover-Draw Board','Incrementing Counter','Note App','Password  Generator','Quiz App','Random Choice Picker','Split Landing Page','Testimonial Box','Theme clock','Toast notification','Todo list']
window.addEventListener('scroll',fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight+150) {
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}

getData()

function getData() {

    HEADERS.forEach((elem,index) => {
        const cardEl = document.createElement('div')
        cardEl.classList.add('card')
        
        const headerEL = document.createElement('div')
        headerEL.classList.add('card-header')
        headerEL.innerHTML = `<img src="${elem}" alt="" />`
        cardEl.appendChild(headerEL)

        const contentEL = document.createElement('div')
        contentEL.classList.add('card-content')

        const aEl = document.createElement('a')
        aEl.setAttribute('href',Desc[index])

        const hEl = document.createElement('h3')
        hEl.classList.add('card-title')
        hEl.innerHTML = TITLES[index];
        aEl.appendChild(hEl)

        contentEL.appendChild(aEl)

        const authorEl = document.createElement('div')
        authorEl.classList.add('author')

        const imgEl = document.createElement('div')        
        imgEl.classList.add('profile-img')
        imgEl.innerHTML ='<img src="images/me.jpg" alt="" />';
        authorEl.appendChild(imgEl)

        const infoEl = document.createElement('div')
        infoEl.classList.add('author-info')
        infoEl.innerHTML = `<strong>salma Soussi</strong> <small>${DATES[index]}</small>`
        authorEl.appendChild(infoEl)

        contentEL.appendChild(authorEl)

        cardEl.appendChild(contentEL)

        content.appendChild(cardEl)
    });
}