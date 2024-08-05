/*jslint browser: true*/
/*global $, console, window*/
(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

$(function () {
  const template = {
    win: $(window),
    navbar: $(".nav-bar"),
  };

  $(document).ready(function () {
    "use strict";
    template.win.on("scroll", function () {
      var navBarOne = $(".bg-gray"),
        navBarMenu = $(".nav-menu-bar");
      if (template.win.scrollTop() > 50) {
        navBarOne.css("display", "none");
        navBarMenu.css("position", "fixed");
      } else {
        navBarOne.css("display", "block");
        navBarMenu.css("position", "relative");
      }
    });
    /*========== Start Scroll For Navigation Menu ==========*/

    //// COLLAPSED MENU CLOSE ON CLICK
    template.navbar.on("click", ".navbar-collapse", function (e) {
      if ($(e.target).is(".navsLink a, .dropdown-menu .dropdown-item")) {
        $(this).collapse("hide");
      }
    });
  });

  // $(document).ready(function () {
  //   // Initiate the swiper
  //   var swiper = new Swiper(".partnerSwiper", {
  //     slidesPerView: 6,
  //     spaceBetween: 20,
  //     autoplay: true,
  //     loop: true,
  //     breakpoints: {
  //       "@0.00": {
  //         slidesPerView: 1,
  //         spaceBetween: 10,
  //       },
  //       "@0.75": {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       "@1.00": {
  //         slidesPerView: 4,
  //         spaceBetween: 40,
  //       },
  //       "@1.50": {
  //         slidesPerView: 6,
  //         spaceBetween: 50,
  //       },
  //     },
  //   });
  // });

  // $(document).ready(function () {
  //   // Initiate the swiper
  //   var testiswiper = new Swiper(".testiSwiper", {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //     autoplay: true,
  //     loop: true,
  //     breakpoints: {
  //       "@0.00": {
  //         slidesPerView: 1,
  //         spaceBetween: 10,
  //       },
  //       "@0.75": {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       "@1.00": {
  //         slidesPerView: 3,
  //         spaceBetween: 40,
  //       },
  //       "@1.50": {
  //         slidesPerView: 3,
  //         spaceBetween: 50,
  //       },
  //     },
  //   });
  // });

  // $(document).ready(function () {
  //   // Initiate the swiper
  //   var alltourSwiper = new Swiper(".alltours", {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //     autoplay: true,
  //     loop: true,
  //     breakpoints: {
  //       "@0.00": {
  //         slidesPerView: 1,
  //         spaceBetween: 10,
  //       },
  //       "@0.75": {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       "@1.00": {
  //         slidesPerView: 3,
  //         spaceBetween: 20,
  //       },
  //       "@1.50": {
  //         slidesPerView: 3,
  //         spaceBetween: 30,
  //       },
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // });

  // $(document).ready(function () {
  //   // Initiate the swiper
  //   var swiperHero = new Swiper(".hero-swiper", {
  //     autoplay: true,
  //     loop: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       type: "progressbar",
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // });

  // $(document).ready(function () {
  //   var mySwiper = new Swiper(".mySwiper", {
  //     spaceBetween: 10,
  //     slidesPerView: 4,
  //     freeMode: true,
  //     watchSlidesProgress: true,
  //     loop: true,
  //   });

  //   var swiper2 = new Swiper(".mySwiper2", {
  //     spaceBetween: 10,
  //     loop: true,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     thumbs: {
  //       swiper: mySwiper, // Use mySwiper here
  //     },
  //   });
  // });

  // /*-----------  Initiate the wowjs  ---------*/
  // $(document).ready(function () {
  //   // Initiate the wowjs
  //   new WOW().init();
  // });
  // /*-----------  end code the wowjs  ---------*/

  // /*-----------  start scroll-up  ---------*/

  // $(template.win).on("scroll", function () {
  //   var scrolltop = $(".scroll-top");
  //   if ($(template.win).scrollTop() >= 1000) {
  //     scrolltop.fadeIn(400);
  //   } else {
  //     scrolltop.fadeOut(400);
  //   }
  // });
  // // Back To 0 Scroll Top body
  // var scrolltop = $(".scroll-top");
  // scrolltop.on("click", function () {
  //   $("html, body").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     1000
  //   );
  // });

  // /*-----------  end scroll-up  ---------*/

  // /*-----------  accordion ---------*/

  // const items = document.querySelectorAll(".accordion button");

  // function toggleAccordion() {
  //   const itemToggle = this.getAttribute("aria-expanded");

  //   for (i = 0; i < items.length; i++) {
  //     items[i].setAttribute("aria-expanded", "false");
  //   }

  //   if (itemToggle == "false") {
  //     this.setAttribute("aria-expanded", "true");
  //   }
  // }

  // items.forEach((item) => item.addEventListener("click", toggleAccordion));

  /*-----------  accordion ---------*/
});

/*-----------  tailor made ---------*/
// $(document).ready(function () {
// $(".date-box input").on('click', function () {
//   var label = $(this).siblings('label');
//   $(label).css("display", "none")
//   })
// })
/*-----------  tailor made ---------*/

// ======================================================
// ======================================================

const Tswiper = new Swiper(".testimonial", {
  speed: 400,
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev",
  },
});

// ======================================================
// ======================================================

//counterUp
let counter = document.querySelectorAll(".counter");
let arr = Array.from(counter);

arr.map((item) => {
  let count = item.innerHTML;
  item.innerHTML = "";
  let countNumber = 0;
  function counterUp() {
    item.innerHTML = countNumber++;
    if (countNumber > count) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(() => {
    counterUp();
  }, item.dataset.speed / count);
});

// ==================================
