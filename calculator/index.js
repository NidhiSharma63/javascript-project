import {
    addHoverEffect
} from './js/btns.style.js';
import {
    getValue,
    Action
} from './js/get-value.js'
const btns = document.querySelectorAll('.btn');
const result = document.querySelector(".result");
const onBtn = document.getElementById("on-btn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal")
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
});
equal.addEventListener('click', () => {
    if (on) {
        Action()
    }
})

const divide = (arr) => {
    let divide = 0;
    for (let i = 0; i < arr.length-1; i++) {
        i+=1;
        if(i==1){
            // to get acces of first two element
            divide += arr[i-1]/arr[i];
        }else{
            // minus all value
            divide/=arr[i];
        }
        i-=1
    }
};
divide([8,2,4])