const sidemenu = document.querySelector('.side_menu');
const menu = document.querySelector('.menu');
const content = document.querySelector('#contents');
const search_tab = document.querySelector('.search_tab');
const logo = document.getElementsByName("pop_up");


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

var tab = document.querySelectorAll('.main');

var observer = new IntersectionObserver((e)=>{
    e.forEach(box =>{
        if(box.isIntersecting){
            box.target.style.opacity = 1
        }else{
            box.target.style.opacity = 0
        }
    })
},{threshold:0.5});

tab.forEach(t =>{
    observer.observe(t)
})

logo.forEach(Element => Element.addEventListener('click', side_out));