const canva = document.getElementById("canva");
const container = document.querySelector(".container");
const cW = canva.clientWidth;
const cH = canva.clientHeight;
let eaten = false;
const ctx = canva.getContext('2d');
let x = 2;
let y = 1
ctx.fillStyle = 'red'
ctx.fillRect(x, y, 8, 6);
const food = canva.getContext('2d');
food.fillStyle = 'green';
let xFood = 110;
let yFood = 100;
food.fillRect(xFood, yFood, 8, 6);
let height = 6;
window.onload = () => {

    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowUp') {
            if (y > 1) {
                ctx.fillStyle = 'red'
                if(!eaten){
                    ctx.clearRect(x, y, 8, 6);
                }
                y -= 4;
                ctx.fillRect(x, y, 8, 6);
            }
        }

        if (e.code === 'ArrowDown') {
            if (y < 141) {
                ctx.fillStyle = 'red'
              if(!eaten){
                    ctx.clearRect(x, y, 8, 6)
              }
                y += 4;
                ctx.fillRect(x, y, 8, 6);
            }
        }

        if (e.code === 'ArrowRight') {
            if (x < 290) {
                ctx.fillStyle = 'red'
              if(!eaten){
                    ctx.clearRect(x, y, 8, 6)
              }
                x += 4;
                ctx.fillRect(x, y, 8, 6);

            }
        }

        if (e.code === 'ArrowLeft') {
            if (x > 2) {
                ctx.fillStyle = 'red'
              if(!eaten){
                    ctx.clearRect(x, y, 8, 6)
              }
                x -= 4;
                ctx.fillRect(x, y, 8, 6);
            }
        }
        if ((8 >= (x - xFood) && (x - xFood > -10)) && (-5 <= (y - yFood) && (y - yFood) <= 5)) {
            eaten=true;
            ctx.fillStyle = 'red'
            x += 8;
            ctx.fillRect(x, y, 8, 6);
        } else {
            
        }
    });
    setInterval(() => {
        food.clearRect(xFood, yFood, 8, 6)
        xFood = Math.floor(Math.random() * 260);
        yFood = Math.floor(Math.random() * 130);
        food.fillStyle = 'green'
        food.fillRect(xFood, yFood, 8, 6);
    }, 3000);
};