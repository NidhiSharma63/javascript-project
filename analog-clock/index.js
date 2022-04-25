const minLine = document.querySelector(".min-niddle1");
const hourLine = document.querySelector(".hours-niddle1");
const secLine = document.querySelector(".sec-niddle1");
const getTime = ()=>{
    const currentTime = new Date()
    const currentSec = currentTime.getSeconds();
    // to move minutes line smoothly
    const secondsRatio = (currentSec/60);
    const currentMins = secondsRatio+(currentTime.getMinutes());
    minsRatio = currentMins*6/60;
    let currentHours = currentTime.getHours();
    // converted hours 24 format into 12 hours
    currentHours=minsRatio+((currentHours % 12) || 12)-3;
    secLine.style.transform = `rotate(${currentSec * 6}deg)`;
    minLine.style.transform = `rotate(${currentMins *6}deg)`;
    hourLine.style.transform = `rotate(${currentHours *30}deg)`;
    window.requestAnimationFrame(getTime);
}
window.requestAnimationFrame(getTime);