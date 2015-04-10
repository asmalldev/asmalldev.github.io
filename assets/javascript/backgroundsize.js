var img = jQuery('.image_overlay");
jQuery(window).resize("resizeBackground");
function resizeBackground() {
    img.height(jQuery(window).height());
}
resizeBackground();
