const menu = document.querySelector('#header');
const cross = document.querySelector('.cross');
const title = document.querySelector('.title');
const content = document.querySelector('#content');
const up = document.querySelector('.up_sign');
const sideMenu = document.querySelector('.side_bar');
const sideScroll = document.querySelector('.small_bar');

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

console.log(sideScroll.parentNode);
var i = sideScroll.parentNode

var scrollSide = document.querySelector('.explane_2').offsetTop;

function keyword(){
    window.scrollTo({top:scrollSide - 150, behavior:'smooth'
    });
}

function topScroll(){
    window.screenTop({top:0, behavior:'smooth'});
}

menu.addEventListener('mouseover', rotate);
content.addEventListener('mouseover', restart);
up.addEventListener('click', scroll);
sideScroll.addEventListener('click',keyword)
i.addEventListener('click', topScroll)