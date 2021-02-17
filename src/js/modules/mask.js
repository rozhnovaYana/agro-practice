import Inputmask from "inputmask";
export default function mask() {
    let im = new Inputmask("+38(099)-999-99-99");
    im.mask(document.querySelectorAll(".tel"))
}