export default function form(formSelector, url) {
    const form = document.querySelector(formSelector),
        modal = document.querySelector(".modal"),
        input = form.querySelectorAll("input"),
        check = modal.querySelector(".modal-check"),
        modalText = modal.querySelector(".text")
    

    form.addEventListener("submit", (e) => {
         e.preventDefault()
        let errors = false;
        input.forEach(inp => {
            inp.addEventListener('change', () => {
                inp.style.border = "";
            });
        });
            input.forEach(item => {
                if (item.value.length == 0 || item.value == " ") {
                    item.style.border = "1px solid red";
                    errors=true;
                } else {
                    item.style.border = "";
                }
            });
        if (!errors) {
            const dataForm = new FormData(form);
        fetch(url, {
            method: "POST",
            body: dataForm
        }).then((res) => {
            if (!res.ok) {
               check.innerText = "x"
                check.style.color = "red"
                modalText.innerText = "Щось пішло не так..." 
                return
            }
        }).catch(() => {
            check.innerText = "&#10006;"
            check.style.color = "red"
            text.innerText = "Щось пішло не так..."
        }).finally(() => {
            form.reset()
            modal.classList.add("modal_active")
            closeModal()
            setTimeout(()=>modal.classList.remove("modal_active"), 2000)
        })
        }
    })
    function closeModal() {
        modal.addEventListener("click", (e) => {
            if (e.target == modal) {
                modal.classList.remove("modal_active")
            }
        })
    }
}
