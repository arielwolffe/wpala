// <!-- on-scroll Javascript to make top-nav white -->
window.onscroll = function() {
  myFunction();
};

var header = document.getElementById("top-navigation");
var menu = document.getElementById("d-navmenu");
var activeMenu = document.getElementById("d-navactive");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("d-top-nav--solid");
    menu.classList.add("d-menu--solid");
    activeMenu.classList.add("d-menu--solid--active");
  } else {
    header.classList.remove("d-top-nav--solid");
    menu.classList.remove("d-menu--solid");
    activeMenu.classList.remove("d-menu--solid--active");
  }
}
