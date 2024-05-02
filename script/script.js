$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-container");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// credits to https://codepen.io/mybluerat/pen/JjoxoaY
highlight();

$(window).on("scroll", function () {
    highlight();
});

function highlight() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    $("mark").each(function () {
        var pos = $(this).offset().top;
        if (scroll + height >= pos) {
            $(this).addClass("active");
        }
        console.log(pos);
        console.log(scroll);
    });
} 