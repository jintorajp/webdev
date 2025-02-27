const grayHeart = document.querySelector(".grayheart");
const redHeart = document.querySelector(".redheart");

grayHeart.addEventListener("click",()=>{
    redHeart.classList.add("animation");
    grayHeart.classList.add("fill-color");
});
redHeart.addEventListener("click",()=>{
    redHeart.classList.remove("animation");
    grayHeart.classList.remove("fill-color");
})