<!--
// resize container_title according to window
function resize() {
	var w = $(window).width();
	var h = $(window).height();
	if (w < 535) {
		document.querySelector('.container_title').style.height = (h - 68) + 'px';
	} else {
		document.querySelector('.container_title').style.height = (h + 68) + 'px';
	}
}
window.onresize = resize;
resize();
-->
