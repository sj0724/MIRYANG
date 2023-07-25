const menu = document.querySelector('#header');
const cross = document.querySelector('.cross');
const title = document.querySelector('.title');
const content = document.querySelector('#content');
const up = document.querySelector('.up_sign');
const container = document.querySelector('.gallery');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');
const containerBox = document.querySelector('.container');

var countLength = containerBox.children.length

for(var i = 0; i < countLength; i++){
    containerBox.children[i].style.left = i*100 + '%';
}

console.log(container);

function rotate(){
    menu.style.height = '420px';
    if(window.scrollY > 100){
        menu.style.height = '360px'
    }else if(1 < window.scrollY){
        title.children[0].style.fontSize = 90 + 'px'
        menu.style.height = '390px'
    }
};

function restart(){
    menu.style.height = "";
    if(window.scrollY > 100){
        title.children[0].style.fontSize = 60 + 'px'
        menu.style.height = '100px'
    }else if(1 < window.scrollY){
        title.children[0].style.fontSize = 90 + 'px'
        menu.style.height = '130px'
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
    containerBox.style.left = "-100%"
};

function moveNext(){
    containerBox.style.left = "0%"
};

function zoom(){
    if(window.scrollY > 100){
        title.children[0].style.fontSize = 60 + 'px'
        menu.style.height = '100px'
    }else if(window.scrollY == 0){
        title.children[0].style.fontSize = 120 + 'px'
        menu.style.height = '180px'
    }else if(1 < window.scrollY < 100){
        title.children[0].style.fontSize = 90 + 'px'
        menu.style.height = '130px'
    }
};


menu.addEventListener('mouseover', rotate);
content.addEventListener('mouseover', restart);
up.addEventListener('click', scroll);
next_btn.addEventListener('click', movePrev);
prev_btn.addEventListener('click', moveNext);
window.addEventListener('scroll', zoom);
