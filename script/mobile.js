function myFunction(x) {
  x.classList.toggle("change");
}

const mobileQ = window.matchMedia("(max-width: 600px)");

$(document).ready(function () {
  if (mobileQ.matches) {

    // $(".toggle-menu").hide();

    $(".mobile-nav").click(function () {
      // $(".toggle-menu").toggleClass("x");

      // if the menu is not visible then...
      if (!($('.toggle-menu').is(':visible'))) {

        // animate the height of the menu
        $(".toggle-menu").animate({ height: "toggle" });

        // disables body from scrolling when menu open
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";

      } else {

        // enable scrolling when menu close
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";

        $(".toggle-menu").hide();
      }
    });
  }
});