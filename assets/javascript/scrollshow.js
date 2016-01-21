<!--
// hide menu on scroll
$(window).scroll(function() {
    $("#menu").css('opacity','1');
    var ScrollTop = parseInt($(window).scrollTop());
    if(ScrollTop > 100) {
	//$("#menu").fadeOut("fast");
	$("#menu").css('opacity','0');
    }
    else {
	//$("#menu").fadeIn("fast");
	$("#menu").css('opacity','1');
    }
});

$(window).scroll(function() {
    var ScrollTop = parseInt($(window).scrollTop());
    if(ScrollTop > 500) {
	$("#menu").css('display','none');
    }
    else {
	$("#menu").css('display','block');
    }
});
-->
