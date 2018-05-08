// <!-- on-scroll Javascript to make top-nav white -->
window.onscroll = function() {
  solidNav();
};

var header = document.getElementById("top-navigation");
var menu = document.getElementById("d-navmenu");
var activeMenu = document.getElementById("d-navactive");

var sticky = header.offsetTop;

function solidNav() {
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

function toggleMenu() {
  var x = document.getElementById("m-navmenu");
  if (x.classList.contains("m-menu")) {
    x.classList.remove("m-menu");
  } else {
    x.classList.add("m-menu");
  }
}
