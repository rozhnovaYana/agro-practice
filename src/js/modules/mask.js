import Inputmask from "inputmask";
export default function mask() {
    let im = new Inputmask("99-9999999");
    im.mask(document.querySelectorAll(".tel"))
}