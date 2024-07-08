const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-menu-item")
const header = document.querySelector(".header")

let showMenu = false;

menuBtn.addEventListener("click" , toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open')
        navMenu.classList.add('open')
        navItem.forEach( item => item.classList.add("open"))
        header.style.zIndex = 60

        showMenu = true;
    }else {
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        navMenu.classList.remove('open')
        navItem.forEach( item => item.classList.remove("open"))
        header.style.zIndex = 50


        showMenu = false;
    }
}
