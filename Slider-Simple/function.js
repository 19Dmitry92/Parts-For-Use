let pictures = [
   'url("images/slider1.jpg")',
   'url("images/slider2.jpg")',
   'url("images/slider3.jpg")'
]
let index = 0;
let sliderDiv = document.querySelector(".slider-div");

const next = () => {{index < pictures.length - 1 ? index++ : index = 0}
    sliderDiv.style.background = pictures[index];
 }
 
const prev = () => {{index > 0 ? index-- : index = pictures.length - 1}
     sliderDiv.style.background = pictures[index];
  };
  






