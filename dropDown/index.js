const showMore = document.getElementById("show-more");
const showLess = document.getElementById("show-less");
const lowerHalf = document.querySelector('.lower-half');

showMore.addEventListener("click",()=>{
    lowerHalf.classList.add("show-lower-half")
    showMore.style.display='none';
    showLess.style.display='block'
});
showLess.addEventListener("click",()=>{
    lowerHalf.classList.remove("show-lower-half");
    showMore.style.display='block';
    showLess.style.display='none'
})