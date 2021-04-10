"use strict";

const overlay = document.querySelector(".overlay");
const button = document.querySelectorAll(".button");
const closeButton = document.querySelector("#x");

overlay.classList.add("hidden");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    overlay.classList.remove("hidden");
  });
}

closeButton.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (ev) {
  if (!overlay.classList.contains("hidden")) {
    if (ev.key === "Escape") {
      overlay.classList.add("hidden");
    }
  }
});
