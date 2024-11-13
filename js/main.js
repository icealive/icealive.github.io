// Import your LESS file
import "../css/styles.less";

// Import Swiper library
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Sticky navbar functionality
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("work-hero .navbar-nav a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});

// Sticky header functionality
window.onscroll = function () {
  stickyHeader();
};

function stickyHeader() {
  var header = document.getElementById("WorkHeader");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize package swiper
  new Swiper(".work-package-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      enabled: false,
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Initialize service swiper
  let workServiceSwiper = null;

  function initServiceSwiper() {
    if (window.innerWidth < 576) {
      workServiceSwiper = new Swiper(".work-service-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          enabled: false,
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }

  // Initial initialization
  initServiceSwiper();

  // Handle resize for service swiper
  window.addEventListener("resize", () => {
    if (window.innerWidth < 576) {
      if (!workServiceSwiper) {
        initServiceSwiper();
      }
    } else {
      if (workServiceSwiper) {
        workServiceSwiper.destroy(true, true);
        workServiceSwiper = null;

        // Reset all slides to their original position
        const slides = document.querySelectorAll(
          ".work-service-swiper .swiper-slide"
        );
        slides.forEach((slide) => {
          slide.style = "";
        });

        // Reset wrapper
        const wrapper = document.querySelector(
          ".work-service-swiper .swiper-wrapper"
        );
        if (wrapper) {
          wrapper.style = "";
        }
      }
    }
  });
});
