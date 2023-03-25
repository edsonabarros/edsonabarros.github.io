let ul = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn i");
function menuHamburger() {
  if (ul.classList.contains('open')){
    ul.classList.remove('open');
  }
  else{
    ul.classList.add('open');
  }
}
