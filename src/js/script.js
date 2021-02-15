console.log(document.documentElement.clientHeight +"and" +document.documentElement.clientWidth)

import select from "./modules/select"
import range from "./modules/range"
import scrollWrapper from "./modules/scroll"
import menu from "./modules/menu"
import smoothScroll from "./modules/smoothScroll"
select()
range()
menu(".humb", "#menu", ".cross", ".menu-item", "promo-nav_active")
smoothScroll("#promo")
smoothScroll("#about")
smoothScroll("#contact")
// scrollWrapper("#slider", 100);





// $('form').submit(function (e) {
//         e.preventDefault();
    
//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: $(this).serialize()
//         }).done(function () { 
//             $(this).find("input").val("");
//             $('form').trigger('reset');
//         });
//         return false;
//     })
