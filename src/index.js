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
dropDownElements.forEach(function toggleDrop(dropDown, index) {
  const dropDownHeight = dropDown.clientHeight;
  dropDown.addEventListener("click", () => {
    if (dropDown.clientHeight >= 100) {
      dropDown.style.height = 100 + "px";
      dropDown.classList.toggle("expand-drop-down");
    } else {
      dropDown.classList.toggle("expand-drop-down");
      dropDown.style.height = dropDownHeight + "px";
      console.log(dropDownHeight);
      console.log(dropDown.clientHeight);
    }
  });
});

let workMasterElement = document.querySelector(".master-work-container");
let hiddenElement = document.querySelector(".hidden-projects");

let workExpanderElement = document.querySelector(".expand-toggle");

const hiddenHeight = hiddenElement.clientHeight + 70;

workExpanderElement.addEventListener("click", expandHiddenProjects);

function expandHiddenProjects() {
  console.log(hiddenHeight);

  if (hiddenElement.clientHeight === 0) {
    hiddenElement.style.height = hiddenHeight + "px";
  } else {
    hiddenElement.style.height = "0px";
  }
}

expandHiddenProjects();
