const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".had-fade");

const closeMenu = function (e) {
  const x = e.target.closest(".header__menu");
  if (x === header) console.log("youhouu");
};

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
    document.addEventListener("click", closeMenu);
    header.classList.add("open");
    fadeElems.forEach(element => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});

// Evenement au click, si le click à lieu sur un élément dont le plus proche parent à la classe 'open', return '';
// Sinon, remove la classe open du header et ferme le menu
