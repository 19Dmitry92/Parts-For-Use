const slidesContainer = document.querySelector(".slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".slide-arrow-prev");
const nextButton = document.querySelector(".slide-arrow-next");
const slideWidth = slide.clientWidth;

const next = () => {
   slidesContainer.scrollLeft < slideWidth * 3
      ? (slidesContainer.scrollLeft += slideWidth)
      : (slidesContainer.scrollLeft -= slideWidth * 4);
};

const prev = () => {
   slidesContainer.scrollLeft > 0
      ? (slidesContainer.scrollLeft -= slideWidth)
      : (slidesContainer.scrollLeft += slideWidth * 4);
};
