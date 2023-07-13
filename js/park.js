const menu = document.querySelector('#header');
const cross = document.querySelector('.cross');
const title = document.querySelector('.title');
const content = document.querySelector('#content');
const up = document.querySelector('.up_sign');
const container = document.querySelector('.gallery');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

var countLength = container.children.length

for(var i = 0; i < countLength; i++){
    container.children[i].style.left = i*100/3 + '%';
}

function rotate(){
    cross.style.rotate = '0deg';
    menu.style.height = '470px';
    if(window.scrollY > 100){
        menu.style.height = '410px'
    }else if(1 < window.scrollY){
        title.children[0].style.fontSize = 90 + 'px'
        menu.style.height = '440px'
    }
};

function restart(){
    cross.style.rotate = '45deg';
    menu.style.height = "";
    if(window.scrollY > 100){
        title.children[0].style.fontSize = 60 + 'px'
        menu.style.height = '150px'
    }else if(1 < window.scrollY){
        title.children[0].style.fontSize = 90 + 'px'
        menu.style.height = '180px'
    }else{
        title.children[0].style.fontSize = 120 + 'px'
    }
};

function scroll(){
    window.scrollTo({
        top:0, left:0, behavior:'smooth' 
    })
};

function movePrev(){
    container.classList.add('move')
};

function moveNext(){
    container.classList.remove('move')
};

function zoom(){
    if(window.scrollY > 100){
        title.children[0].style.fontSize = 60 + 'px'
        menu.style.height = '150px'
    }else if(window.scrollY == 0){
        title.children[0].style.fontSize = 120 + 'px'
        menu.style.height = '230px'
    }else if(1 < window.scrollY < 100){
        title.children[0].style.fontSize = 90 + 'px'
        menu.style.height = '180px'
    }
};


menu.addEventListener('mouseover', rotate);
content.addEventListener('mouseover', restart);
up.addEventListener('click', scroll);
next_btn.addEventListener('click', movePrev);
prev_btn.addEventListener('click', moveNext);
window.addEventListener('scroll', zoom);
