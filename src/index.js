function toggleNav() {
  mobileNavElement.classList.toggle("hide-nav");
}

let mobileNavElement = document.querySelector("#navbar");
let menuToggle = document.querySelector(".nav-arrow");
menuToggle.addEventListener("click", toggleNav);

if (window.innerWidth < 767) {
  toggleNav();
}

let flipElements = document.querySelectorAll("#flippable");

flipElements.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    item.classList.toggle("flipped");
  });
});

let dropDownElements = document.querySelectorAll(".drop-down");
dropDownElements.forEach((dropDown, index) => {
  dropDown.addEventListener("click", () => {
    dropDown.classList.toggle("expand-drop-down");
  });
});

let workMasterElement = document.querySelector(".master-work-container");
let workExpanderElement = document.querySelector(".expand-toggle");
workExpanderElement.addEventListener("click", () => {
  workMasterElement.classList.toggle("expanded");
});
