export default function scroll() {
    function scrollWrapper(wrapperSelector, startDelta) {
        const wrapper = document.querySelector(wrapperSelector),
            height = document.documentElement.clientHeight;
        //
        changeSlide(startDelta-100)
        function changeSlide(count) {
            wrapper.style.transform = `translateY(-${height * count / 100}px)`;
            const menuList = document.querySelectorAll('.nav__item'),
                nav = document.querySelectorAll(".block-main__status-item"),
                menuLink = document.querySelector(".menu-list")
            if (count / 100 == 2) {
                menuLink.classList.remove("nav__list")
                menuLink.classList.add("nav__list_green")
            } else {
                menuLink.classList.add("nav__list")
                menuLink.classList.remove("nav__list_green")
            }
            menuList.forEach((item) => {
                item.classList.remove("nav__item_active")
                if (item.getAttribute("data-menu") == (count / 100 + 1)) {
                    item.classList.add('nav__item_active')
                }
            })
             nav.forEach((item) => {
                item.classList.remove("block-main__status-item_active")
                if (item.getAttribute("data-menu") == (count / 100 + 1)) {
                    item.classList.add('block-main__status-item_active')
                }
            })
        }
        //
        let enable = true;
        window.addEventListener("wheel", (e) => {
            if (!enable) return;
            enable = false;
            if (e.deltaY > 0) {
                startDelta += 100;
            } else {
                startDelta -= 100;
            }
            if (startDelta > 0 && startDelta < 400) {
                changeSlide(startDelta - 100);
            } else if (startDelta == 0) {
                startDelta = 100;
            } else if (startDelta == 400) {
                startDelta = 300
            }
            setTimeout(() => enable = true, 1000);
  
        });
   
  
    }
  
    scrollWrapper("#slider", 100);
 

    //навигация по слайдам
    function menuListNav(menuSelector) {
        const menuList = document.querySelectorAll(menuSelector);
        menuList.forEach((item) => {
            item.addEventListener("click", (e) => {
                let num = +item.getAttribute("data-menu");
                scrollWrapper("#slider", (num * 100))
       
            })
        })
    }
    menuListNav(".nav__item");
    menuListNav(".block-main__status-item");



}
 