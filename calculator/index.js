import {
    addHoverEffect
} from './js/btns.style.js';
import {
    getValue
} from './js/get-value.js'
const btns = document.querySelectorAll('.btn');
const result = document.querySelector(".result");
const onBtn = document.getElementById("on-btn");
const clear = document.getElementById("clear")
let on = false;
onBtn.addEventListener("click", () => {
    on = true;
    result.innerHTML = ''
    addHoverEffect(btns);
    getValue(btns, result);
}, {
    once: true
});
clear.addEventListener("click", () => {
    if (on) {
        result.innerHTML = ''
    }
})