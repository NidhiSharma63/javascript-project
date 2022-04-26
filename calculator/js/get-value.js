// const btns = document.querySelectorAll('.btn');
export const getValue = (btns,result) =>{
    btns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            let clickedVal =   btn.getAttribute("value");
            if(clickedVal!=='ON'&& clickedVal!=='clear'){
                result.innerHTML += clickedVal
            }
        });
    });
}