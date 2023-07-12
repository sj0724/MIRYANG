const menu = document.querySelector('#header');
const cross = document.querySelector('.cross');
const title = document.querySelector('.title');
const content = document.querySelector('#content');
const up = document.querySelector('.up_sign');
const container = document.querySelector('.gallery');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

function rotate(){
    cross.style.rotate = '0deg';
    menu.style.height = '470px';
}

function restart(){
    cross.style.rotate = '45deg';
    menu.style.height = '230px';
}

function scroll(){
    window.scrollTo({
        top:0, left:0, behavior:'smooth' 
    })
};

function movePrev(){
    container.classList.add('move');
}

function moveNext(){
    container.classList.remove('move');
}

menu.addEventListener('mouseover', rotate);
content.addEventListener('mouseover', restart);
up.addEventListener('click', scroll);
next_btn.addEventListener('click', movePrev);
prev_btn.addEventListener('click', moveNext)