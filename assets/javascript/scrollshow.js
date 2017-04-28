<!--
// hide menu on scroll
$(window).scroll(function() {
    $("#menu").css('opacity','1');
    var ScrollTop = parseInt($(window).scrollTop());
    if(ScrollTop > 100) {
	       $("#menu").css('margin-top','-4em');
    }
    else {
	       $("#menu").css('margin-top','0');
    }
});

// show footer
$(window).scroll(function() {
    var ScrollTop = parseInt($(window).scrollTop());
    if(ScrollTop > 2000) {
        $("#footer").css('display', 'block');
    }
    else {
        $("#footer").css('display', 'none');
    }
});
-->
