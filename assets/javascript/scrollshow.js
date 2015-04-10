$("#footer").css('display','none');
$(window).scroll(function() {
    if($(window).scrollTop() + 160 > $(document).height() - $(window).height() ) {
        $("#footer").fadeIn("fast");
    }
    else {
       $("#footer").css('display','none');
    }
});
