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
console.log(document.documentElement.clientHeight,document.documentElement.clientWidth )
if (document.documentElement.clientHeight > 500 && document.documentElement.clientWidth > 992) {
    scroll()
}
form("#data-form")
form("#order-form")
// smoothScroll("#promo")
// smoothScroll("#about")
// smoothScroll("#contact")
// menu(".humb", "#menu", ".cross", ".menu-item", "promo-nav_active")
})












