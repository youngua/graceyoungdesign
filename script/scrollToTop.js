/**
 * This scroll to top when arrow up is clicked BEGIN
 */
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 300) {
    $('#back2Top').fadeIn();
  } else {
    $('#back2Top').fadeOut();
  }
});

/**
 * This scroll to top when arrow up is clicked END
 */
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});