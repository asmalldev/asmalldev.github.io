<!--
// resize containers according to window size

var elements = document.querySelectorAll('.container_resize'), i;

function resize() {
	var w = $(window).width();
	var h = $(window).height();
    for (var i = 0; i < elements.length; i++) {
        if (w < 535) {
            elements[i].style.height = (h - 68) + 'px';
        } else {
            elements[i].style.height = (h + 68) + 'px';
        }
    }
}
window.onresize = resize;
resize();
-->
