(function ($) {
  // "use strict";

  $(document).ready(function () {
    /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/
    $(".home-slider").owlCarousel({
      loop: true,
      dots: true,
      // autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 500,
      nav: true,
      navText: ["❮", "❯"],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        991: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    /*---------------------------------------------------
            ScrollIt Plugin Activation
        ----------------------------------------------------*/
    $.scrollIt();

    /*---------------------------------------------------
            Accordian
        ----------------------------------------------------*/
    $(".collapse").on("shown.bs.collapse", function () {
      $(this).prev().addClass("active");
    });

    $(".collapse").on("hidden.bs.collapse", function () {
      $(this).prev().removeClass("active");
    });
    $("li").on("click", function () {
      $(this).siblings().removeClass("active_item");
      $(this).addClass("active_item");
    });
  });

  /*---------------------------------------------------
        Smooth Scroll
    ----------------------------------------------------*/
  $('a[href*="#"]:not([href="#"]):not([data-toggle])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });

  /*---------------------------------------------------
        Sticky Header
    ----------------------------------------------------*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header").removeClass("sticky");
    } else {
      $("#header").addClass("sticky");
    }
  });

  /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
  // $(window).on("load", function () {
  //   $(".preloader").fadeOut(500);
  // });
})(jQuery);
