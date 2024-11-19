// سلايدر المعاينات
const thumbsSlider = new Swiper(".thumbs-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

// السلايدر الرئيسي
const mainSlider = new Swiper(".main-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSlider, // الربط مع سلايدر المعاينات
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    430: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
