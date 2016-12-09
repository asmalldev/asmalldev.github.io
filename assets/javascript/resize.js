<!--
// resize container_title according to window
function resize() {
	var h = $(window).height() - 50;
	document.querySelector('.container_title').style.height = h + 'px';
}
window.onresize = resize;
resize();
-->
