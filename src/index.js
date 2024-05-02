function toggleMobileNav() {
  mobileNavElement.classList.toggle("hide-nav");
}

let mobileNavElement = document.querySelector("#mobile-nav");
let hamburgerMenuToggle = document.querySelector(".hamburger-menu");
hamburgerMenuToggle.addEventListener("click", toggleMobileNav);
