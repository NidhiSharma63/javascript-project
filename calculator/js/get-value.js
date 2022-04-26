const result = document.querySelector(".result");
let totalResultInnerHtml;
export const getValue = (btns, result) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {

            totalResultInnerHtml = String(result.innerHTML);
            if (totalResultInnerHtml.length < 21) {
                result.innerHTML += btn.getAttribute("value");
            }
            totalResultInnerHtml = String(result.innerHTML);
        });
    });
}
const add = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    result.innerHTML = sum;
}
const sub = (arr) => {
    let sub = 0;
    for (let i = 0; i < arr.length-1; i++) {
        sub += (parseInt(arr[i])-parseInt(arr[i+1]))
    }
    result.innerHTML = sub;
}
const mult = (arr) => {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= parseInt(arr[i]);
    }
    result.innerHTML = mult;
}
const divide = (arr) => {
    let divide=0;
    for (let i = 0; i < arr.length-1; i++) {
        divide = (parseInt(arr[i])/parseInt(arr[i+1]));
    }
    result.innerHTML = divide;
}
export const Action = (equal) => {
    let splitValue;
    for (let i = 0; i < totalResultInnerHtml.length; i++) {
        switch (totalResultInnerHtml[i]) {
            case '+':
                splitValue = totalResultInnerHtml.split("+");
                add(splitValue);
                break;
            case '-':
                splitValue = totalResultInnerHtml.split("-");
                sub(splitValue);
                break;
            case '/':
                splitValue = totalResultInnerHtml.split("/");
                divide(splitValue)
                break;
            case '%':
                splitValue = totalResultInnerHtml.split("%")
                break;
            case '*':
                splitValue = totalResultInnerHtml.split("*");
                mult(splitValue)
                break;
        }
    }
}