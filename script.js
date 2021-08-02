import { burgerMenu } from "./dom/burgerMenu.js"
import { digitalClock, alarm } from "./dom/clock.js"

document.addEventListener('DOMContentLoaded', e => {
    burgerMenu(".hamburger", "#myModal", ".section-content a")
    digitalClock("#clock", "#activar-reloj", "#desactivar-reloj")
})