export default function range() {
    const range = document.querySelector("#count"),
        currentPercent = document.querySelector(".contact-form__range_current");
    let perc = range.value;
    range.addEventListener("input", () => {
        setLabel(range.value)
    })
    function setLabel(perc) {
        currentPercent.innerText = perc;
        currentPercent.style.left=`${0.95*perc}%`
    }
    setLabel(perc)
    
}