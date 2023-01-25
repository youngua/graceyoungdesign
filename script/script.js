$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-container");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});