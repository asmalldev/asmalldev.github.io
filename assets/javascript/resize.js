<!--
// resize profile wrapper, container_title and white_box according to window
function resize() {
	var h = $(window).height();
	var w = $(window).width();
	var r = h * (w * .35);
	document.querySelector('#profile_wrapper').style.height = (r*.0009) + 'px';
	document.querySelector('.container_title').style.height = (r*.00068) + 'px';
}
window.onresize = resize;
resize();
-->
