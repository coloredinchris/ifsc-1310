$(document).ready(function() {
//autoplay slideshow
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500
    });

//back to top button
const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({behavior:"smooth"});
};

backToTopButton.addEventListener("click", goToTop)

//nav disappear on scroll down, appear on scroll up
const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("hidden-nav");
    } else {
      nav.classList.remove("hidden-nav");
    }

    lastScrollY = window.scrollY;
  });
});