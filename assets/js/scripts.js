// openDropdown

let dropdown = document.getElementById('dropdown');
let openDropdown = document.getElementById('openDropdown');

openDropdown.addEventListener('mouseenter' , function () {
  dropdown.classList.add('active');
})
// openDropdown.addEventListener('mouseleave' , function () {
//   dropdown.classList.remove('active');
// })
// document.addEventListener('mousemove', (event) => {
//   if (!event.target.closest('.dropdownArea')) {
//     dropdown.classList.remove('active');
//   }
// })
// swiper

var services = new Swiper(".services", {
  slidesPerView: 2,
  spaceBetween: 98,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 9.5,
    },
  },
});

var customers = new Swiper(".customers", {
  slidesPerView: 2,
  spaceBetween: 98,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var blog = new Swiper(".blog", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
var testimonial = new Swiper(".testimonial", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: true,
});

// datapicker

jalaliDatepicker.startWatch();

// aos

AOS.init();

// counter

$('.counter').counterUp({
  delay: 10,
  time: 1400
});