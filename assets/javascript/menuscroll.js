<!--
document.querySelector('#menu').style.opacity = .7;
var d = $(".next").offset().top;
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
