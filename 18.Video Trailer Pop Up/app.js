const close = document.querySelector(".close-icon");

const videoContainer = document.querySelector(".trailer-container");
const btn = document.querySelector(".btn");
const video = document.querySelector("video");


btn.addEventListener("click",()=>{
    videoContainer.classList.remove("active");
});


close.addEventListener("click",()=>{
    videoContainer.classList.add("active");
   video.pause();
   video.currentTime =0;
})