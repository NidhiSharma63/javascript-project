// const canva = document.getElementById("canva");
// const container = document.querySelector(".container");
// const parts = document.querySelectorAll(".part");
// const snake = document.querySelector(".snake");
// const food = document.querySelector(".food");
// food.style.top = '-13px'
// let eaten = false;
// let x = 1;
// let y = 1;
// const containerHeigth = container.offsetHeight;
// const containerWidth = container.offsetWidth;
// const getTotalPartsWidth = () => {
//     let Totalwidth;
//     parts.forEach((item, index) => {
//         Totalwidth = item.clientWidth * (index + 1)
//     });
//     return Totalwidth
// }
// window.onload = () => {

//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'ArrowUp') {
//             snake.style.flexDirection = 'column';
//             console.log(y)
//             if ((-6 < y) && (y < (containerHeigth - getTotalPartsWidth()) + 2)) {
//                 y -= 5;
//                 parts.forEach((item) => {
//                     item.style.top = y + 'px'
//                 });
//             }
//         }
//         if (e.code === 'ArrowDown') {
//             snake.style.flexDirection = 'column'

//             if (y < containerHeigth - getTotalPartsWidth()) {
//                 y += 5;
//                 parts.forEach((item) => {
//                     item.style.top = y + 'px'
//                 });
//             }
//         }

//         if (e.code === 'ArrowRight') {
//             snake.style.flexDirection = 'row'

//             if (x < (containerWidth - getTotalPartsWidth())) {
//                 x += 5
//                 parts.forEach((item) => {
//                     item.style.left = x + 'px'
//                 });
//             }
//         }

//         if (e.code === 'ArrowLeft') {
//             snake.style.flexDirection = 'row';
//             if ((-6 < x) && (x < (containerWidth - getTotalPartsWidth()) + 2)) {
//                 x -= 5;
//                 parts.forEach((item) => {
//                     item.style.left = x + 'px';

//                 });
//             }
//         }
        // console.log(x);
        // console.log(Math.abs(parseInt(food.style.top)))
        // console.log(x-(Math.abs(parseInt(food.style.top))));
        // console.log(Math.abs(parseInt(food.style.top)))

    // });
    // setTimeout(() => {
    //     food.style.top = (-(Math.floor(Math.random() * 400) + 13)) + 'px';
    //     food.style.left = (Math.floor(Math.random() * 700)) + 'px';
    // }, 1000);
// };



// if ((8 >= (x - xFood) && (x - xFood > -10)) && (-5 <= (y - yFood) && (y - yFood) <= 5)) {
//     eaten=true;
//     ctx.fillStyle = 'red'
//     x += 8;
//     ctx.fillRect(x, y, 8, 6);
// } else {

// }
let lastTime = 0;
const main = (ctime)=>{
    if((ctime-lastTime)/1000 < 0.5){
        return
        // console.log(ctime)
    }
    console.log(ctime);
    lastTime=ctime
    window.requestAnimationFrame(main)
}
window.requestAnimationFrame(main)