<!--
// style reading progress bar in posts by changing color and width
var $progress = $("#progress");
var width = parseInt($progress.css('width'));
document.querySelector('#progress').style.background = "#1793D1";
$(window).scroll(function() {
    $progress.css({opacity: 1});
    var top = $(window).scrollTop() + 0;
	var bottom = $(document).height() - $(window).height() - 300;
    var newWidth = ( 100 * (top / bottom));

$progress.css({
    width: newWidth + "%"
    }, 500, 'easeInOutSine');
});
-->
