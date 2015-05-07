<!--
// change menu opacity on scroll
document.querySelector('#menu').style.opacity = .7;
var d = $(".container_title").offset().top;
$(document).scroll(function() {
    if($(this).scrollTop() < d)
    {
        document.querySelector('#menu').style.opacity = .7;
    }
    else {
        document.querySelector('#menu').style.opacity = 1;
    }
});

-->
