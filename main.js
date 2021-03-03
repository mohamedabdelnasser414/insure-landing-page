
// Navigation toggle 
const toggle= document.querySelector(".hamburger");
const navLinks= document.querySelector(".nav-links");
const bodyEl = document.querySelector("body");

toggle.addEventListener("click", ()=>{
    if(toggle.classList.contains("active")){
        toggle.classList.remove("active")
        toggle.setAttribute("src" ,"./images/icon-close.svg");
        navLinks.classList.add("show-nav");
        bodyEl.classList.add("body-height");
    }else{
        toggle.classList.add("active");
        toggle.setAttribute("src" ,"./images/icon-hamburger.svg")
        navLinks.classList.remove("show-nav");
        bodyEl.classList.remove("body-height");
    }
})