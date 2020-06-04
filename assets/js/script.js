/* Author: */

var menu = document.querySelector(".hamburger");
menu.addEventListener("click",navigation,false);
/*navigation function*/
function navigation() {
    var nav = document.getElementsByTagName("nav")[0];
    if(nav.style.maxHeight) {
        nav.style.maxHeight = null;
    }
    else {
        nav.style.maxHeight = nav.scrollHeight + "px";
        nav.style.display = "block";
    }
}



















