
$(window).scroll(function() {
    if($('.next').offset().top > document.querySelector('.container_title').style.height) {
        document.querySelector('#menu').style.opacity = 1;
    }
    else{
        document.querySelector('#menu').style.opacity = initial;
    }
 
});
