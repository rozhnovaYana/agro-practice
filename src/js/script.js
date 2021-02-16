console.log(document.documentElement.clientHeight +"and" +document.documentElement.clientWidth)

import select from "./modules/select"
import range from "./modules/range"
import scrollWrapper from "./modules/scroll"
import menu from "./modules/menu"
import smoothScroll from "./modules/smoothScroll"
import mask from "./modules/mask"
select()
range()
menu(".humb", "#menu", ".cross", ".menu-item", "promo-nav_active")
smoothScroll("#promo")
smoothScroll("#about")
smoothScroll("#contact")
mask()
scrollWrapper("#slider", 100);






const form = document.querySelector("#data-form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataForm = new FormData(form);
    fetch("mailer/smart.php", {
        method: "POST",
        body:dataForm
    }).then(() => {
        form.reset()
    })
    
})



