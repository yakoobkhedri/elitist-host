// openDropdown

let dropdown = document.getElementById('dropdown');
let openDropdown = document.getElementById('openDropdown');

openDropdown.addEventListener('mouseenter' , function () {
  dropdown.classList.add('active');
  openDropdown.classList.add('active')
})

document.addEventListener('mousemove', (event) => {
  if (!event.target.closest('.dropdown') && !event.target.closest('.DropdownArea')) {
    dropdown.classList.remove('active');
    openDropdown.classList.remove('active')
  }
})

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

var tabsSwiper = new Swiper(".tabsSwiper", {
  slidesPerView: 1.4,
  loop: true,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var testimonial = new Swiper(".testimonial", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: true,
});
var tabsSwiper2 = new Swiper(".tabsSwiper2", {
  slidesPerView: 1.4,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var testimonial = new Swiper(".testimonial", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: true,
});
// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));

accordionBtn.forEach(item => {
  item.addEventListener('click' , function () {
    item.nextElementSibling.classList.toggle('active');
  })
});
accordionBtn2.forEach(item => {
  item.addEventListener('click' , function () {
    item.nextElementSibling.classList.toggle('active');
  })
});
// datapicker

jalaliDatepicker.startWatch();

// aos

AOS.init();

// navigation

const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) =>
  item.addEventListener('mouseover', activeLink));


// counter

$('.counter').counterUp({
  delay: 10,
  time: 1400
});