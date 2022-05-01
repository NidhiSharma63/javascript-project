const paragraphText = document.querySelector(".paragraph-text");
const text = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ut. Repellendus molestias animi omnis facilis recusandae provident dignissimos tempore perferendis sunt, quos enim qui, dolorum molestiae? Dolorem nulla cumque molestiae'
];
const userTextInput = document.getElementById("user-text");
const startbBtn = document.getElementById("start-btn");
const tryAgain = document.getElementById("restart-btn");
const timerContainer = document.querySelector(".timer");
const errorContainer = document.getElementById("error");
let start = false;
let presetTimer = 50
let timer = presetTimer;
let index = 0;
let error = 0;
timerContainer.innerHTML = timer;
// APPENDING TEXT IN PARAGRAPH
const appendText = async () => {
    const splitText = text[0].split('');
    splitText.forEach((char, ind) => {
        const span = document.createElement("span");
        span.innerText = char;
        paragraphText.appendChild(span);
    });
};

// LISTEN FOR INPUT EVENT
const inputEvent = async () => {
    await appendText();
    start = true;
    const spans = paragraphText.querySelectorAll('span');
    userTextInput.setAttribute("maxlength", `${spans.length}`)
    userTextInput.addEventListener("input", () => {
        const spans = paragraphText.querySelectorAll('span');
        const userTextValue = userTextInput.value.split('');
        if (userTextValue[index] == spans[index].innerText) {
            spans[index].classList.add('correct');
        } else {
            spans[index].classList.add('incorrect');
            error++;
            errorContainer.innerHTML = `error:<span class=error-count>${error}</span>`
        };
        index++;
    });
    timeLeft();
};

inputEvent();
// RESTART BTN
const DisplayRestartBtn = () => {
    startbBtn.style.display = "none";
    tryAgain.style.display = "flex";
    return;
};

const timeLeft = () =>{
    if (start) {
        let x = setInterval(() => {
            timer--;
            if (timer <= -1) {
                clearInterval(x);
                timer =0;
                DisplayRestartBtn();
                userTextInput.disabled = true,
                start = false;
            }
            timerContainer.innerHTML = timer;
        }, 1500);
    };
}
// tryAgain BTN EVENT LISTENER
tryAgain.addEventListener("click", () => {
    userTextInput.disabled = false,
    start=true;
    timeLeft()
    timer=presetTimer;
    error=0;
    timerContainer.innerHTML = timer;
    userTextInput.value='';
    errorContainer.innerHTML = `error:<span class=error-count>${error}</span>`;
    startbBtn.style.display = "flex";
    tryAgain.style.display = "none";
});