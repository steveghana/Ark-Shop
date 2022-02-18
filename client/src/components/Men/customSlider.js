export const customslider = (container) => {
  let slidecontainer = document.querySelector(".slide_slide");
  let allcurrentSlides = document.querySelectorAll(".slider_slides");
  let arrowLeft = document.querySelector(".arrow_left");
  let arrowRight = document.querySelector(".arrow_right");
  let slideWidth = allcurrentSlides[0].offsetWidth;
  let movex = slideWidth;
  slidecontainer.style.transform = `translateX(${-movex}px)`;
  let count = 1;

  arrowRight.addEventListener("click", () => {
    count++;

    slidecontainer.style.transition = "transform 150ms ease";
    slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    if (count >= allcurrentSlides.length) count = allcurrentSlides.length;
  });
  arrowLeft.addEventListener("click", () => {
    count--;

    //

    slidecontainer.style.transition = "transform 150ms ease";
    slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;

    if (count < 0) count = 0;
  });
  slidecontainer.addEventListener("transitionend", () => {
    if (allcurrentSlides[count].id === "firstclone") {
      slidecontainer.style.transition = "none";
      count = 1;

      slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    }
    if (allcurrentSlides[count].id === "lastclone") {
      slidecontainer.style.transition = "none";
      count = allcurrentSlides.length - 2;

      slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    }
  });

  window.addEventListener("resize", () => {
    slidecontainer.style.transition = "none";
    slideWidth = allcurrentSlides[0].offsetWidth;
    movex = slideWidth;
    slidecontainer.style.transform = `translateX(${-movex * count}px)`;
  });
};
