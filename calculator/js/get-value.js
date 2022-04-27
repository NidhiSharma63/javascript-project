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
    let subtarct = 0;
    for (let i = 0; i < arr.length-1; i++) {
        i+=1;
        if(i==1){
            // to get acces of first two element
            subtarct += arr[i-1] - arr[i];
        }else{
            // minus all value
            subtarct-=arr[i];
        }
        i-=1
    }
    result.innerHTML = subtarct
}
const mult = (arr) => {
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        mult *= parseInt(arr[i]);
    }
    result.innerHTML = mult;
}
const divide = (arr) => {
    let division = 0;
    for (let i = 0; i < arr.length-1; i++) {
        i+=1;
        if(i==1){
            // to get acces of first two element
            division += arr[i-1]/arr[i];
        }else{
            // divide all value
            division/=arr[i];
        }
        i-=1
    }
    result.innerHTML = division;
};
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