const paragraphText = document.querySelector(".paragraph-text");
const text = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ut. Repellendus molestias animi omnis facilis recusandae provident dignissimos tempore perferendis sunt, quos enim qui, dolorum molestiae? Dolorem nulla cumque molestiae'
]
const userTextInput = document.getElementById("user-text");
const startbBtn = document.getElementById("start-btn");
const restartbtn = document.getElementById("restart-btn");
const timerContainer = document.querySelector(".timer");
const errorContainer = document.getElementById("error")
let alredyStart = false;
let presetTimer = 30
let timer = presetTimer;
let index = 0;
let error = 0;
timerContainer.innerHTML = timer;
const appendText = () => {
    const splitText = text[0].split('');
    splitText.forEach((char, ind) => {
        const span = document.createElement("span");
        span.innerText = char;
        paragraphText.appendChild(span);
    });
    userTextInput.addEventListener("input", () => {
        const spans = paragraphText.querySelectorAll('span');
        const userTextValue = userTextInput.value.split('');
        if (userTextValue[index] == spans[index].innerText) {
            spans[index].classList.add('correct');
        } else {
            spans[index].classList.add('incorrect');
            error++;
            errorContainer.innerHTML = `error:<span class=error-count>${error}</span>`
        }
        index++;
    });
}
// RESTART BTN
const DisplayRestartBtn = () => {
    startbBtn.style.display = "none";
    restartbtn.style.display = "flex";
    return;
}
// RESTART BTN EVENT LISTENER
restartbtn.addEventListener("click", () => {
    alredyStart = false;
    startbBtn.style.display = "flex";
    restartbtn.style.display = "none";
    timer = presetTimer;
});
// START BTN
startbBtn.addEventListener('click', () => {

    if (!alredyStart) {
        let x = setInterval(() => {
            timer--;
            if (timer <= -1) {
                clearInterval(x);
                timer = presetTimer;
                DisplayRestartBtn();
            }
            timerContainer.innerHTML = timer;
        }, 1000);
    }
    alredyStart = true
});
appendText();