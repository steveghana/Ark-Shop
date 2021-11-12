export const img1Hover = (target, images1, images2, images3, images4) => {
  if (!target.classList.contains("grow")) {
    if (target.classList.contains("select1")) {
      images1.style.transform = "translateX(1%)";
      images2.style.transform = "translateX(-2%)";
      images3.style.transform = "translateX(-70%)";
      images4.style.transform = "translateX(-130%)";
    }

    if (target.classList.contains("select2")) {
      images1.style.transform = "translateX(0%)";
      images2.style.transform = "translateX(-80%)";
      images3.style.transform = "translateX(-80%)";
      images4.style.transform = "translateX(-140%)";

    }
    if (target.classList.contains("select3")) {
      images2.style.transform = "translateX(-70%)";
      images3.style.transform = "translateX(-150%)";
      images4.style.transform = "translateX(-150%)";
    }
    if (target.classList.contains("select4")) {
      images2.style.transform = "translateX(-60%)";
      images3.style.transform = "translateX(-130%)";
      images4.style.transform = "translateX(-200%)";

    }
  }
};
