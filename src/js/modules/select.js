export default function select(){
    const select = document.querySelector(".select"),
        selectList = document.querySelector(".select__list"),
        selectItem = document.querySelectorAll(".select__item"),
        selectHeader = select.querySelector(".select__head")
    selectHeader.addEventListener("click", () => {
        selectToggle()
    })
    selectItem.forEach(item => {
        item.addEventListener("click", () => {
            select.querySelector(".select__head").innerText = item.innerText
            select.querySelector(".select__input").value = item.innerText
            selectToggle()
        })
    })
    function selectToggle() {
        selectList.classList.toggle("select__list_active")
    }
}