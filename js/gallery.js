const picture = document.querySelector('.feed');
const bgimage = document.querySelector('.zoom_pic');
const popUp = document.querySelector('.zoom');

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


picture.addEventListener('click', zoom);
popUp.addEventListener('click', zoom_out);