function toggleNav() {
  mobileNavElement.classList.toggle("hide-nav");
}

let mobileNavElement = document.querySelector("#navbar");
let menuToggle = document.querySelector(".nav-arrow");
menuToggle.addEventListener("click", toggleNav);

toggleNav();

if (window.innerWidth < 767) {
  setTimeout(toggleNav, 800);
  setTimeout(toggleNav, 1600);
}
