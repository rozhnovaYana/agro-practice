export default function menu(humbSelector, menuSelector, crossSelector, itemSelector, activeClass) {
    const humb = document.querySelector(humbSelector),
        menu = document.querySelector(menuSelector),
        cross = menu.querySelector(crossSelector),
        item = menu.querySelectorAll(itemSelector)
    menuHandler(humb);
    menuHandler(cross);
    item.forEach(i =>{
        i.addEventListener("click", () => {
            item.forEach(menuItem => menuItem.classList.remove("promo-nav__item_active"));
            i.classList.add("promo-nav__item_active")
            menu.classList.toggle(activeClass);
        })
})
    function menuHandler(item) {
        item.addEventListener("click", () => {
            menu.classList.toggle(activeClass);
            if (document.documentElement.clientWidth < 992) {
                  if (menu.classList.contains(activeClass)) {
                document.body.style.overflow = "hidden" 
            } else {
                document.body.style.overflow=""
            }
            }

        })
        
    }

}