
let navMenu = document.getElementById("nav-menu")
let navToggle = document.getElementById("nav-toggle")
let navClose = document.getElementById("nav-close")

// menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu")
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

// ======================== Remove menu mobile ================
let navLink = document.querySelectorAll(".nav_link");
const linkAction = () =>{
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))