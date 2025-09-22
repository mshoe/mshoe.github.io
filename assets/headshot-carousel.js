(function () {
  "use strict";

  var HEADSHOT_IMAGES = [
    {
      src: "./assets/images/portrait/lugano2025.jpg",
      alt: "Michael Xu smiling outdoors in Lugano in 2025",
    },
    {
      src: "./assets/images/portrait/rocky.jpg",
      alt: "Michael Xu standing beside a rocky shoreline",
    },
    {
      src: "./assets/images/portrait/star.png",
      alt: "Stylized portrait of Michael Xu with a star background",
    },
  ];

  function applyHeadshotImage(imageElement, index) {
    var entry = HEADSHOT_IMAGES[index];

    if (!entry) {
      return;
    }

    imageElement.src = entry.src;
    imageElement.alt = entry.alt;
    imageElement.setAttribute("data-headshot-index", String(index));
  }

  function cycleHeadshot(imageElement, step) {
    var total = HEADSHOT_IMAGES.length;

    if (!imageElement || total === 0) {
      return;
    }

    var currentIndex = parseInt(imageElement.getAttribute("data-headshot-index"), 10);

    if (isNaN(currentIndex)) {
      currentIndex = 0;
    }

    var nextIndex = (currentIndex + step + total) % total;
    applyHeadshotImage(imageElement, nextIndex);
  }

  function handleKeyboardNavigation(event, imageElement) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      cycleHeadshot(imageElement, -1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      cycleHeadshot(imageElement, 1);
    }
  }

  function hideArrowButton(button) {
    if (!button) {
      return;
    }

    button.classList.add("is-hidden");
    button.setAttribute("aria-hidden", "true");
    button.setAttribute("tabindex", "-1");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector(".headshot-carousel");

    if (!carousel) {
      return;
    }

    var headshot = carousel.querySelector("#headshot");
    var previousButton = carousel.querySelector(".headshot-arrow-left");
    var nextButton = carousel.querySelector(".headshot-arrow-right");
    var headshotLink = carousel.querySelector(".headshot-wrapper a");

    if (!headshot || !previousButton || !nextButton || HEADSHOT_IMAGES.length === 0) {
      return;
    }

    if (HEADSHOT_IMAGES.length === 1) {
      applyHeadshotImage(headshot, 0);
      hideArrowButton(previousButton);
      hideArrowButton(nextButton);
      return;
    }

    var initialIndex = Math.floor(Math.random() * HEADSHOT_IMAGES.length);
    applyHeadshotImage(headshot, initialIndex);

    previousButton.addEventListener("click", function () {
      cycleHeadshot(headshot, -1);
    });

    nextButton.addEventListener("click", function () {
      cycleHeadshot(headshot, 1);
    });

    [previousButton, nextButton, headshotLink].forEach(function (element) {
      if (!element) {
        return;
      }

      element.addEventListener("keydown", function (event) {
        handleKeyboardNavigation(event, headshot);
      });
    });
  });
})();
