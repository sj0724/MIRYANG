const menu = document.querySelector('#header');
const cross = document.querySelector('.cross');
const title = document.querySelector('.title');

function rotate(){
    cross.style.rotate = '0deg';
    menu.style.height = '470px';
}

function restart(){
    cross.style.rotate = '45deg';
    menu.style.height = '230px';
}

menu.addEventListener('mouseover', rotate);
content.addEventListener('mouseover', restart);