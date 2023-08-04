// Side Navigation JS code
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navbar.classList.add("active");
    body.style.overflow = "hidden"
} 
cancelBtn.onclick = function(){
    cancelBtn.style.opacity = "1";
    cancelBtn.style.pointerEvents = "auto";
    navbar.classList.remove("active");
    body.style.overflow = "auto";
} 

//Sticky Navigation Menu JS code
let nav = document.querySelector(".nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}

// Side Navigation Menu Closed When Navigation Links Clicked 
let navLinks = document.querySelectorAll(".menu li a ");
for(var i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener("click" , ()=>{
        cancelBtn.style.opacity = "1";
        cancelBtn.style.pointerEvents = "auto";
        navbar.classList.remove("active");
        body.style.overflow = "auto";
    });
}
