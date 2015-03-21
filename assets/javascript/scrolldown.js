	$("a[href='#next']").click(function() {
		$('html,body').animate({
			scrollTop: $(".scroll_to").offset().top},
			375);
	});
