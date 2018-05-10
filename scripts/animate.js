var div = document.getElementById("numbers");
var container = document.getElementById("headerContainer");

var me = function(event) {
  var x = event.clientX,
    y = event.clientY,
    w = div.offsetWidth,
    m = 30,
    square = div.getBoundingClientRect(),
    pxToBox = x - w / 2,
    left = m * pxToBox / this.innerWidth;
  div.style.left = left + "px";
};

container.addEventListener("mousemove", me, false);
