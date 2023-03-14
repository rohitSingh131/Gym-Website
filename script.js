window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

const menu = document.querySelector(".menu");
const navItems = document.querySelector('.navItems');
const fullBody = document.querySelector('.fullbody');
menu.onclick = () => {
    menu.classList.toggle('active')
    navItems.classList.toggle('active')
    fullBody.classList.toggle('active')
}
fullBody.onclick = (e) => {
    if(menu.contains(e.target) && !navItems.contains(e.target))
    menu.classList.remove('active')
    navItems.classList.remove('active')
    fullBody.classList.remove('active')
}
