const nav = document.querySelector('.nav')
const cards = document.querySelectorAll('.card');
const headers = document.querySelectorAll('.header');
const titles = document.querySelectorAll('.title');
const profile_imgs = document.querySelectorAll('.profile-img');
const nameAuthors = document.querySelectorAll('.name');
const dates = document.querySelectorAll('.date');
// Get all the elements with the class animated-bg or animated-bg-text
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');


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


setTimeout(getData, 2000);

function getData() {
    // Insert all the information that you want to show

    headers.forEach((header,index) => {
        header.innerHTML = `<img src="${HEADERS[index]}"
    alt="" />`;
    });
    titles.forEach((title,index) => {
        title.innerHTML = TITLES[index];
    });
    profile_imgs.forEach(profile_img => {
        profile_img.innerHTML ='<img src="images/me.jpg" alt="" />';
    });
    nameAuthors.forEach(nameAuthor => {
        nameAuthor.innerHTML = 'salma Soussi';
    });

    dates.forEach((date,index) => {
        date.innerHTML = DATES[index];
    });
    
    // Remouve the class animated-bg and animated-bg-text from all elements of the Objects
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
   
}