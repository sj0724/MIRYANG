const menuButton = document.querySelector(".cross");
let menu = document.querySelector(".menu_list");

function openMenu(){
    menu.style.display = 'flex';
    setTimeout(function(){
        menu.style.display = 'none';
    }, 3000);
}

menuButton.addEventListener("click", openMenu);