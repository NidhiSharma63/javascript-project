export const addHoverEffect = (btns) => {
    // adding hover effect to each btn
    btns.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = 'scale(1.1)'
        })
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = 'scale(1)'
        })
    });
}