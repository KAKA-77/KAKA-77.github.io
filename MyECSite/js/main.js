'use strict';
{
  const imgs=document.querySelectorAll('.hero img');
  let currentIndex=0;
function play(){
  setTimeout(()=>{
    imgs[currentIndex].classList.remove('current');
    currentIndex++;
    if(currentIndex>imgs.length-10){
      currentIndex=0;
    }
    imgs[currentIndex].classList.add('current');
    play();
  }, 3000);
}

play();



}