console.log(document.documentElement.clientHeight +"and" +document.documentElement.clientWidth)

import select from "./modules/select"
import range from "./modules/range"
import scrollWrapper from "./modules/scroll"
select()
range()
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
