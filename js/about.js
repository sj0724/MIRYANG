const menu = document.querySelector('#header');
const cross = document.querySelector('.cross');
const title = document.querySelector('.title');
const content = document.querySelector('#content');
const up = document.querySelector('.up_sign');
const keywordScroll = document.querySelector('.keyword_btn');
const topScroll = document.querySelector('.top_btn');

function rotate(){
    cross.style.rotate = '0deg';
    menu.style.height = '410px';
};

function restart(){
    cross.style.rotate = '45deg';
    menu.style.height = "";
};

function scroll(){
    window.scrollTo({
        top:0, left:0, behavior:'smooth' 
    });
};

var scrollSide = document.querySelector('.explane_2').offsetTop;

function keyword(){
    window.scrollTo({top:scrollSide - 150, behavior:'smooth'
    });
};


menu.addEventListener('mouseover', rotate);
content.addEventListener('mouseover', restart);
up.addEventListener('click', scroll);
topScroll.addEventListener('click', scroll);
keywordScroll.addEventListener('click',keyword);
