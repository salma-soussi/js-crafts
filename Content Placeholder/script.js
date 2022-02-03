const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const nameAuthor = document.getElementById('name');
const date = document.getElementById('date');

// Get all the elements with the class animated-bg or animated-bg-text
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    // Insert all the information that you want to show
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
    alt="" />`;
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,earum.';
    profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/women/27.jpg" alt="" />';
    nameAuthor.innerHTML = 'salma Soussi';
    date.innerHTML = 'Oct 11, 2021';

    // Remouve the class animated-bg and animated-bg-text from all elements of the Objects
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}