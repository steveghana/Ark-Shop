export const customslider = (container) => {
  let slidecontainer = container.current;
  let allcurrentSlides = slidecontainer.querySelectorAll(".slider_slides");
  let arrowLeft = document.querySelector(".arrow_left");
  let arrowRight = document.querySelector(".arrow_right");
  let slideWidth = allcurrentSlides[0].offsetWidth;
  let movex = slideWidth;
  //clone
  //cheack if the clone exists to avoid duplicates
  // const previousfirstclone = slidecontainer.querySelector("#firstclone");
  // const previousSecondclone = slidecontainer.querySelector("#lastclone");
  // if (!previousfirstclone && !previousSecondclone) {
  //   const firstclone = allcurrentSlides[0].cloneNode(true);
  //   const lastClone = allcurrentSlides[numOfSlides - 1].cloneNode(true);
  //   firstclone.setAttribute("id", "firstclone");
  //   lastClone.setAttribute("id", "lastclone");
  //   slidecontainer.appendChild(firstclone);
  //   slidecontainer.prepend(lastClone);
  // }

  slidecontainer.style.transform = `translateX(${-movex}px)`;
  let count = 1;

  arrowRight.addEventListener("click", () => {
    count++;
    Array.from(allcurrentSlides).forEach((img) => {
      let image = img.querySelector("img");
      shrink(image);
      // increase(image);
    });
    let image = allcurrentSlides[count].querySelector("img");
    increase(image);
    slidecontainer.style.transition = "transform 300ms ease";
    slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    if (count >= allcurrentSlides.length) count = allcurrentSlides.length;
  });
  arrowLeft.addEventListener("click", () => {
    count--;
    Array.from(allcurrentSlides).forEach((img) => {
      let image = img.querySelector("img");
      shrink(image);
    });

    let image = allcurrentSlides[count].querySelector("img");
    increase(image);

    slidecontainer.style.transition = "transform 300ms ease";
    slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;

    if (count < 0) count = 0;
  });
  slidecontainer.addEventListener("transitionend", () => {
    if (allcurrentSlides[count].id === "firstclone") {
      slidecontainer.style.transition = "none";
      count = 1;
      Array.from(allcurrentSlides).forEach((img) => {
        let image = img.querySelector("img");
        increase(image, "noting");
      });

      slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    }
    if (allcurrentSlides[count].id === "lastclone") {
      slidecontainer.style.transition = "none";
      count = allcurrentSlides.length - 2;
      Array.from(allcurrentSlides).forEach((img) => {
        let image = img.querySelector("img");
        increase(image, "noting");
      });

      slidecontainer.style.transform = `translateX(${-(movex * count)}px)`;
    }
  });

  window.addEventListener("resize", () => {
    Array.from(allcurrentSlides).forEach((img) => {
      let image = img.querySelector("img");
      increase(image);
    });
    slidecontainer.style.transition = "none";
    slideWidth = allcurrentSlides[0].offsetWidth;
    movex = slideWidth;
    slidecontainer.style.transform = `translateX(${-movex * count}px)`;
  });
};

const shrink = (item) => {
  // item.style.transition = "all 400ms ease";
  item.style.transform = "scale(0.5,0.5)";
};
const increase = (item, showtrans) => {
  if (!showtrans) {
    item.style.transition = "all 700ms ease";
  }
  item.style.transform = "scale(1,1)";
};
