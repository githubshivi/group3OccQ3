$(function () {
  $("#hamburger").on("click", function () {
    $("body").css({
      transform: "translate3d(300px, 0px, 0px)",
      "transition-duration": "1s",
    });
  });
  $("#back-btn").on("click", function () {
    $("body").css("transform", "translate3d(0px, 0px, 0px)");
  });

  $("#back-btn").on("click", function () {
    $(".nav-slider").animate({ left: "-300px" });
  });

  $("#nav-arrow-contact").on("click", function () {
    $(".nav-slider-contact").css({"left":"0px", "transition-duration": "1s",});
  });

  $("#back-btn-contact").on("click", function () {
    $(".nav-slider-contact").css({"left":"-300px", "transition-duration": "1s",});
  });

  $("#about-drop").hover(
    function () {
      $(".about-dropdown").css("display", "block");
    },
    function () {
      $(".about-dropdown").css("display", "none");
    }
  );
  $("#global-drop").hover(
    function () {
      $(".global-dropdown").css("display", "block");
    },
    function () {
      $(".global-dropdown").css("display", "none");
    }
  );
  $("#market-drop").hover(
    function () {
      $(".markets-dropdown").css("display", "block");
    },
    function () {
      $(".markets-dropdown").css("display", "none");
    }
  );

  $("#support-drop").hover(
    function () {
      $(".support-dropdown").css("display", "block");
    },
    function () {
      $(".support-dropdown").css("display", "none");
    }
  );

  $("#product-drop").hover(
    function () {
      $(".product-dropdown").css("display", "block");
    },
    function () {
      $(".product-dropdown").css("display", "none");
    }
  );

  $("#search-img").on("click", function () {
    $("#search-box").slideToggle("fast");
  });
  $("#search-img-sm").on("click", function () {
    $("#search-box-sm").slideToggle("fast");
  });
  $("#global-drop-sm").hover(
    function () {
      $(".global-dropdown-sm").css("display", "block");
    },
    function () {
      $(".global-dropdown-sm").css("display", "none");
    }
  );




  $(".owl-carousel").owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
});
