const picture = document.querySelector('.feed');
const bgimage = document.querySelector('.zoom_pic');
const popUp = document.querySelector('.zoom');
const sidemenu = document.querySelector('.side_menu');
const menu = document.querySelector('.menu');
const content = document.querySelector('#contents');
const search_tab = document.querySelector('.search_tab');

function zoom(e){
    var i = e.target.style.backgroundImage;
    bgimage.style.backgroundImage = i;
    popUp.style.display = 'flex';
};

function zoom_out(e){
    if(e.target == popUp){
    popUp.style.display = 'none';
    };
};

var u = menu.nodeValue = 0;

function side_out(){
    if(u == 0){
        menu.classList.add('small');
        search_tab.classList.add('small');
        menu.children[0].style.writingMode = 'vertical-rl';
        menu.children[0].style.fontSize = '15px';
        u =+ 1;
    }else if(u == 1){
        menu.classList.remove('small');
        search_tab.classList.remove('small');
        menu.children[0].style.writingMode = '';
        menu.children[0].style.fontSize = '30px';
        u = 0;
    };
};


picture.addEventListener('click', zoom);
popUp.addEventListener('click', zoom_out);
menu.addEventListener('click', side_out);