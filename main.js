const slider = document.getElementById("slider");
const images = document.getElementsByClassName("images");
const dots = document.getElementsByClassName("dots");

//Buttons

const prevBtn = document.getElementById("prevImg");
const nextBtn = document.getElementById("nextImg");

let counter = 1;

nextImg.addEventListener("click", () => {
  reset();
  resetCL();
  if (counter === 5) {
    images[0].style.display = "block";
    images[0].style.zIndex = "5";
    images[4].style.display = "block";
    images[4].style.animation = "disappear 0.8s";
    images[0].style.animation = "appear 0.8s";
    counter = 1;
  } else {
    images[counter].style.display = "block";
    images[counter].style.zIndex = "5";
    images[counter - 1].style.display = "block";
    images[counter - 1].style.animation = "disappear 0.8s";
    images[counter].style.animation = "appear 0.8s";
    counter++;
  }
  dots[counter - 1].classList.replace("far", "fas");
  phrasesdisplay();
});

prevImg.addEventListener("click", () => {
  reset();
  resetCL();

  if (counter === 1) {
    images[4].style.display = "block";
    images[4].style.zIndex = "5";
    images[0].style.display = "block";
    images[0].style.animation = "disappear 0.8s";
    images[4].style.animation = "appear 0.8s";
    counter = 5;
  } else {
    images[counter - 2].style.display = "block";
    images[counter - 2].style.zIndex = "5";
    images[counter - 1].style.display = "block";
    images[counter - 1].style.animation = "disappear 0.8s";
    images[counter - 2].style.animation = "appear 0.8s";
    counter--;
  }
  dots[counter - 1].classList.replace("far", "fas");
  phrasesdisplayl();
});

dots[0].addEventListener("click", () => {
  reset();
  resetCL();
  images[counter - 1].style.display = "block";
  images[counter - 1].style.animation = "disappear 0.8s";
  images[0].style.animation = "appear 0.8s";
  images[0].style.display = "block";
  images[0].style.zIndex = "5";
  dots[0].classList.replace("far", "fas");
  counter = 1;
  phrasesdisplay();
});
dots[1].addEventListener("click", () => {
  reset();
  resetCL();
  images[counter - 1].style.display = "block";
  images[counter - 1].style.animation = "disappear 0.8s";
  images[1].style.animation = "appear 0.8s";
  images[1].style.display = "block";
  images[1].style.zIndex = "5";
  dots[1].classList.replace("far", "fas");
  counter = 2;
  phrasesdisplay();
});
dots[2].addEventListener("click", () => {
  reset();
  resetCL();
  images[counter - 1].style.display = "block";
  images[counter - 1].style.animation = "disappear 0.8s";
  images[2].style.animation = "appear 0.8s";
  images[2].style.display = "block";
  images[2].style.zIndex = "5";
  dots[2].classList.replace("far", "fas");
  counter = 3;
  phrasesdisplay();
});
dots[3].addEventListener("click", () => {
  reset();
  resetCL();
  images[counter - 1].style.display = "block";
  images[counter - 1].style.animation = "disappear 0.8s";
  images[3].style.animation = "appear 0.8s";
  images[3].style.display = "block";
  images[3].style.zIndex = "5";
  dots[3].classList.replace("far", "fas");
  counter = 4;
  phrasesdisplay();
});
dots[4].addEventListener("click", () => {
  reset();
  resetCL();
  images[counter - 1].style.display = "block";
  images[counter - 1].style.animation = "disappear 0.8s";
  images[4].style.animation = "appear 0.8s";
  images[4].style.display = "block";
  images[4].style.zIndex = "5";
  dots[4].classList.replace("far", "fas");
  counter = 5;
  phrasesdisplay();
});

reset = () => {
  Array.from(images).forEach(element => {
    element.style.display = "none";
    element.style.transition = "none";
    element.style.zIndex = "2";
  });
};

resetCL = () => {
  Array.from(dots).forEach(element => {
    element.classList.replace("fas", "far");
  });
};

//text slider

const phrase = document.getElementsByClassName("phrasepres");
const phrases = Array.from(phrase);

phrasesdisplay = () => {
  phrases.forEach(element => {
    element.style.display = "none";
  });
  phrases[counter - 1].style.display = "block";
  phrases[counter - 1].style.animation = "phr 0.8s";
};

phrasesdisplayl = () => {
  phrases.forEach(element => {
    element.style.display = "none";
  });
  phrases[counter - 1].style.display = "block";
  phrases[counter - 1].style.animation = "phl 0.8s";
};
