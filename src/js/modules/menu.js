export default function menu(humbSelector, menuSelector, crossSelector, itemSelector, activeClass){
    const humb = document.querySelector(humbSelector),
        menu = document.querySelector(menuSelector),
        cross = menu.querySelector(crossSelector),
        item=menu.querySelectorAll(itemSelector)
    menuHandler(humb);
    menuHandler(cross);
    item.forEach(i=>menuHandler(i))
    function menuHandler(item) {
        item.addEventListener("click", () => {
            menu.classList.toggle(activeClass);
            if (menu.classList.contains(activeClass)) {
                document.body.style.overflow = "hidden" 
            } else {
                document.body.style.overflow=""
            }
        })
    }
}