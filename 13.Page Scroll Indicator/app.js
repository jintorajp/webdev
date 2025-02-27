

   let indicator = document.querySelector(" .scroll-indicator .progress");


   window.addEventListener("scroll",()=>{
    let totalHeight= document.documentElement.scrollHeight;
   let windowHeight = document.documentElement.clientHeight;
   let scrollableHeight = totalHeight - windowHeight;
   let userScrolledHeight = document.documentElement.scrollTop;
   
    let percentageOfRemainingHeight = scrollableHeight > 0 ? (userScrolledHeight / scrollableHeight)* 100 : 0 ;
   indicator.style.width =`${percentageOfRemainingHeight}%`;
    console.log(percentageOfRemainingHeight);
});

