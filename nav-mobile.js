var btnNav = document.getElementById("btn-nav-mobile");
var nav = document.getElementById("navbar-mobile");

if(btnNav) {
    btnNav.addEventListener('click', showNav, false);
}

function showNav() {
    if(nav.classList.contains('hide')) {
        nav.classList.remove("hide")
    } else {
        nav.classList.toggle("hide")
    }
}