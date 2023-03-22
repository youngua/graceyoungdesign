$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-container");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function toggle_visibility(visual) {
    var e = document.getElementById(visual);
    if (e.style.display == 'flex')
        e.style.display = 'none';
    else
        e.style.display = 'flex';
}