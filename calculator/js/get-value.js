// const btns = document.querySelectorAll('.btn');
export const getValue = (btns, result) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let totalLenghtResultInnerHtml = String(result.innerHTML);
            if (totalLenghtResultInnerHtml.length < 21) {
                result.innerHTML += btn.getAttribute("value")
            }
        });
    });
}