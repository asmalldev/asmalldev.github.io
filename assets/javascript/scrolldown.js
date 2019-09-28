<!--
// scroll function for button
$(".CVscroll").click(function() {
	$('html,body').animate({
		scrollTop: $("#experience_container").offset().top},
		475);
});
$("#scroll_down").click(function() {
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if (width > 550) {
		$('html,body').animate({
			scrollTop: $(".rest_wrapper").offset().top},
			475);
	}
	else {
		$('html,body').animate({
			scrollTop: $(".container").offset().top},
			475);
	}
});
-->
