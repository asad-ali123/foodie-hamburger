const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const goToTop = document.querySelector(".go-to-top")
const mainContent = document.querySelector(".main-content")

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("show-menu");
});
closeIcon.addEventListener("click", (e) => {
  headerContent.classList.remove("show-menu");
});
window.addEventListener("click", (e) => {
  headerContent.classList.remove("show-menu");
});
nav.addEventListener("click", (e)=>{
    e.stopPropagation();
})

goToTop.addEventListener("click", (e)=>{
    mainContent.scrollTo(0 , 0);

})