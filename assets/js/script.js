// $(document).ready(function () {

// var splide = new Splide(".splideCustomer", {
//   type: "loop",
//   perPage: 4,
//   perMove: 1,
//   padding: "7rem",
//   autoplay: true,
//   pagination: false,
//   pauseOnHover: false,
//   pauseOnFocus: false,
//   speed: 2000,
//   interval: 3000,

//   breakpoints: {
//     991: {
//       perPage: 3,
//       padding: "5rem",
//     },

//     640: {
//       perPage: 1,
//       padding: "5rem",
//     },
//   },
// });
// splide.mount();
// });

function scrollWaypointInit(items, trigger) {
  items.each(function () {
    var element = $(this),
      osAnimationClass = element.data("animation"),
      osAnimationDelay = element.attr("data-animation-delay");

    element.css({
      "-webkit-animation-delay": osAnimationDelay,
      "-moz-animation-delay": osAnimationDelay,
      "animation-delay": osAnimationDelay,
    });

    var trigger = trigger ? trigger : element;

    trigger.waypoint(
      function () {
        element.addClass("animated").addClass(osAnimationClass);
      },
      {
        // triggerOnce: true,
        offset: "100%",
      }
    );
  });
}

//Call the init

$(document).ready(function () {
  scrollWaypointInit($(".animateMe"));
});

jQuery(document).ready(function ($) {
  $("#bannerSlider").lightSlider({
    item: 1,
    loop: true,
    slideMove: 1,
    slideMargin: 0,
    // mode: 'fade',
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 3000,
    pause: 5000,
    controls: false,
    auto: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });

  $("#bannerSliderM").lightSlider({
    item: 1,
    loop: true,
    slideMove: 1,
    slideMargin: 0,
    // mode: 'fade',
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 3000,
    pause: 5000,
    controls: false,
    auto: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });

  $(".owl-carousel-icon").owlCarousel({
    center: true,
    items: 2,
    nav: true,
    dots: false,
    // loop: true,
    autoplay: true,
    rewindNav: false,
    rewind: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    navText: ["", ""],
    responsive: {
      767: {
        items: 6,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    navText: ["", ""],
    // navContainer: '.main-content .custom-nav',
    responsive: {
      768: {
        items: 3,
      },
    },
  });

  $("#imageGallery").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 6,
    slideMargin: 0,
    enableDrag: true,
    currentPagerPosition: "left",
    // onSliderLoad: function (el) {
    //   el.lightGallery({
    //     selector: "#imageGallery .lslide",
    //   });
    // },
  });

  // $("a.stop-video").click(function () {
  //   $(".youtube-video")[0].contentWindow.postMessage(
  //     '{"event":"command","func":"' + "stopVideo" + '","args":""}',
  //     "*"
  //   );
  // });

  // var splide = new Splide(".splideJob", {
  //   type: "loop",
  //   perPage: 1,
  //   perMove: 1,
  //   padding: "20rem",
  //   autoplay: true,
  //   pagination: false,
  //   pauseOnHover: false,
  //   pauseOnFocus: false,
  //   speed: 2000,
  //   interval: 4000,

  //   breakpoints: {
  //     991: {
  //       perPage: 1,
  //       padding: "10rem",
  //     },

  //     640: {
  //       perPage: 1,
  //       padding: "5rem",
  //     },
  //   },
  // });
  // splide.mount();
});
