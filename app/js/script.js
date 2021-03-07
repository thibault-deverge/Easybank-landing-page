const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Remove the overlay
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    // Add the overlay
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  }
});
