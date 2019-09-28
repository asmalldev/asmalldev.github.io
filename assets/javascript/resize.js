<!--
// resize containers according to window size
var elements = [".container_title"];

function resize() {
	var w = $(window).width();
	var h = $(window).height();
    for (var i = 0; i < elements.length; i++) {
        if (w < 535) {
            document.querySelector(elements[i]).style.height = (h - 68) + 'px';
        } else {
            document.querySelector(elements[i]).style.height = (h + 68) + 'px';
        }
    }
}
window.onresize = resize;
resize();
-->
