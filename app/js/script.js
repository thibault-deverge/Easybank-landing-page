const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".had-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Remove the overlay
    document.body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(element => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Add the overlay
    document.body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(element => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
