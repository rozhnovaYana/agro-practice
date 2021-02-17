'use strict'
import select from "./modules/select"
import range from "./modules/range"
import scroll from "./modules/scroll"
import menu from "./modules/menu"
import smoothScroll from "./modules/smoothScroll"
import mask from "./modules/mask"
import form from "./modules/form"
document.addEventListener("DOMContentLoaded", () => {
    select()
    range()
    mask()
    form("#data-form", "mailer/smart.php")
    form("#order-form","mailer/smart_order.php")
if (document.documentElement.clientHeight > 500 && document.documentElement.clientWidth > 992) {
    scroll()
} else if (document.documentElement.clientWidth < 992) {
    smoothScroll("#promo")
    smoothScroll("#about")
    smoothScroll("#contact")
    menu(".humb", "#menu", ".cross", ".menu-item", "promo-nav_active")
    
}

})












