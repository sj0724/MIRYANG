const picture = document.querySelector('.feed');
const bgimage = document.querySelector('.zoom_pic');
const popUp = document.querySelector('.zoom');
const sidemenu = document.querySelector('.side_menu');
const menu = document.querySelector('.menu');
const content = document.querySelector('#contents');


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

function side_out(e){
    menu.classList.add('small');
}




picture.addEventListener('click', zoom);
popUp.addEventListener('click', zoom_out);
sidemenu.addEventListener('click', side_out);