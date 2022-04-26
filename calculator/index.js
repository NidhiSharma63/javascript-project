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
equal.addEventListener('click',()=>{
    if(on){
        Action()
    }
})

const add =(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=parseInt(arr[i])
    }
    console.log(sum)
}
// add([21,3,4])