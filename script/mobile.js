function myFunction(x) {
  x.classList.toggle("change");
}

const mobileQ = window.matchMedia("(max-width: 420px)");

$(document).ready(function() {
  if (mobileQ.matches) {
    $(".toggle").hide();
    $(".mobile-nav").click(function() {
      $(".toggle").toggleClass("x");

      $(".toggle").animate({ height: "toggle" });
    });
  } else {
    $(".toggle").show();
  }
});
