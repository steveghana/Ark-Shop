export const customslider = () => {
  let slidecontainer = document.querySelector(".slide_slide");
  let allcurrentSlides = document.querySelectorAll(".slider_slides");
  let arrowLeft = document.querySelector(".arrow_left");
  let arrowRight = document.querySelector(".arrow_right");
  let numOfSlides = allcurrentSlides.length;
  let slideWidth = allcurrentSlides[0].getBoundingClientRect().width;
  let movex = slideWidth;
  //clone
  //cheack if the clone exists to avoid duplicates
  const previousfirstclone = slidecontainer.querySelector("#firstclone");
  const previousSecondclone = slidecontainer.querySelector("#lastclone");
  if (!previousfirstclone && !previousSecondclone) {
    const firstclone = allcurrentSlides[0].cloneNode(true);
    const lastClone = allcurrentSlides[numOfSlides - 1].cloneNode(true);
    firstclone.setAttribute("id", "firstclone");
    lastClone.setAttribute("id", "lastclone");
    slidecontainer.appendChild(firstclone);
    slidecontainer.prepend(lastClone);
  }

  let allSlides = document.querySelectorAll(".slider_slides");
  slidecontainer.style.transition = "none";
  slidecontainer.style.transform = `translateX(${-movex}px)`;
  let count = 1;

  slidecontainer.style.transition = "transform 400ms ease";
  arrowRight.addEventListener("click", () => {
    count++;
    Array.from(allSlides).forEach((img) => {
      let image = img.querySelector("img");
      shrink(image);
    });
    let slideimg = allSlides[count].querySelector("img");
    increase(slideimg);
    slidecontainer.style.transition = "transform 100ms ease";
    slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    if (count === allSlides.length) count = numOfSlides;
  });
  arrowLeft.addEventListener("click", () => {
    count--;
    Array.from(allSlides).forEach((img) => {
      let image = img.querySelector("img");
      shrink(image);
    });
    let slideimg = allSlides[count].querySelector("img");
    slidecontainer.style.transition = "transform 100ms ease";
    increase(slideimg);
    slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;

    if (count < 0) count = 0;
  });
  slidecontainer.addEventListener("transitionend", () => {
    if (allSlides[count].id === "firstclone") {
      slidecontainer.style.transition = "none";
      count = 1;
      Array.from(allSlides).forEach((img) => {
        let image = img.querySelector("img");
        increase(image, "noting");
      });

      slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    }
    if (allSlides[count].id === "lastclone") {
      slidecontainer.style.transition = "none";
      count = numOfSlides;
      Array.from(allSlides).forEach((img) => {
        let image = img.querySelector("img");
        increase(image, "noting");
      });

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

const shrink = (item) => {
  // item.style.transition = "all 400ms ease";
  item.style.opacity = "0";
  item.style.opacity = "0";
  item.style.opacity = "0";
};
const increase = (item, showtrans) => {
  if (!showtrans) item.style.transition = "all 700ms ease";
  item.style.opacity = "1";
  item.style.opacity = "1";
  item.style.opacity = "1";
};
