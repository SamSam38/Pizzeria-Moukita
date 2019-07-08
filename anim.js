const anima = document.getElementsByClassName("animacc");

displaya = () => {
  setTimeout(() => {
    anima[0].style.visibility = "visible";
  }, 300);
};
anima[0].addEventListener("animationstart", displaya());
