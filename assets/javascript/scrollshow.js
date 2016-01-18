<!--
// show footer on scroll
/*$("#footer").css('display','none');
$(window).scroll(function() {
    if($(window).scrollTop() + 180 > $(document).height() - $(window).height() ) {
        $("#footer").fadeIn("fast");
    }
    else {
       $("#footer").css('display','none');
    }
});
*/

// hide menu on scroll
$("#menu").css('opacity','1');
$(window).scroll(function() {
    $("#menu").css('opacity','1');
    if($(window).scrollTop() + 4200 > $(document).height() - $(window).height() ) {
	//$("#menu").fadeOut("fast");
	$("#menu").css('opacity','0');
    }
    else {
	$("#menu").css('opacity','1');
    }
});
-->
