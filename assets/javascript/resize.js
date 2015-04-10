	function resize() {
		var h = $(window).height();
		var w = $(window).width();
		var r = h * (w * .75);
		document.querySelector('#profile_wrapper').style.height = (r*.0009) + 'px';
		document.querySelector('.container_title').style.height = (r*.00068) + 'px';
		document.querySelector('#white_box').style.height = (r*.00068) + 'px';
        document.querySelector('.image_overlay').style['background-size'] = 'auto ' + (h+200);
    }
	window.onresize = resize;
	resize();
    
