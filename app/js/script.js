const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".had-fade");

///////////////////////
// Helper function Open and Close menu

function openMenu() {
  document.body.classList.add("noscroll");
  header.classList.add("open");
  fadeElems.forEach(element => {
    element.classList.add("fade-in");
    element.classList.remove("fade-out");
  });
}

function closeMenu() {
  document.body.classList.remove("noscroll");
  header.classList.remove("open");
  fadeElems.forEach(element => {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
}

///////////////////////
//  Event listener

overlay.addEventListener("click", function (e) {
  if (header.classList.contains("open")) {
    closeMenu();
  }
});

btnHamburger.addEventListener("click", function (e) {
  if (header.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});
