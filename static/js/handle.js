const sliders = document.querySelector(".wrapperbox");
var scrollPerClick;
var ImagePadding = 20;

// Scroll Functionality
var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}

scrollPerClick = document.querySelector(".img-1").clientWidth + 20;