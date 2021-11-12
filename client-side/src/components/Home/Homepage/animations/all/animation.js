export const reset = (image1,image2,image3,image4, ) =>{
          image1.style.transform = "translateX(0%)";
          image2.style.transform = "translateX(-50%)";
          image3.style.transform = "translateX(-100%)";
          image4.style.transform = "translateX(-150%)";
}

export const selectedProduct = (target, maincontainer, morebutton) =>{
target.classList.add("grow")
maincontainer.style.pointerEvents = "none";
morebutton.classList.add("center");
}

export const description = (mainSection, descriptionBtn) =>{
  mainSection.classList.toggle("shrink");
  if (mainSection.classList.contains("shrink")) {
    descriptionBtn.classList.add("move");
  } else {
    descriptionBtn.classList.remove("move");
  }
}