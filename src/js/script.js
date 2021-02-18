'use strict'
import select from "./modules/select"
import range from "./modules/range"
import scroll from "./modules/scroll"
import menu from "./modules/menu"
import smoothScroll from "./modules/smoothScroll"
import mask from "./modules/mask"
import form from "./modules/form"
document.addEventListener("DOMContentLoaded", () => {
    const landscape=document.documentElement.clientWidth>document.documentElement.clientHeight
    select()
    range()
    mask()
    form("#data-form", "mailer/smart.php")
    form("#order-form","mailer/smart_order.php")
if (document.documentElement.clientHeight > 500 && document.documentElement.clientWidth > 992&&landscape) {
    scroll()
} else if (document.documentElement.clientWidth < 992) {
    document.querySelector(".contact-aside__bg").innerHTML= `<img src="./img/contact/logo_mobile.png" alt=""></img>`
    smoothScroll("#promo")
    smoothScroll("#about")
    smoothScroll("#contact")
    menu(".humb", "#menu", ".cross", ".menu-item", "nav_active")
    
}

})












