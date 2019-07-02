$(function(){

	$(window).on('load', function(){
		$('.preloader').delay(500).fadeOut('slow', function(){
			$(this).attr('style', 'display: none !important');
		});
	});
	
	baguetteBox.run('.gallery');
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});

});


function onYouTubeIframeAPIReady() {
	var iStatus;

	oPlayer = new YT.Player('videoPlayer', {
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	var $playButton = $('#videoPlayBtn');
	$playButton.on("click", function() {
		if (iStatus == YT.PlayerState.PLAYING) {
			$playButton.show();
			oPlayer.pauseVideo();
			iStatus = YT.PlayerState.PAUSED;
		} else {
			oPlayer.playVideo();
			iStatus = YT.PlayerState.PLAYING;
			$playButton.hide();
		}
	});

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PAUSED) {
			$playButton.show();
			iStatus = YT.PlayerState.PAUSED;
		} else if (event.data == YT.PlayerState.PLAYING) {
			iStatus = YT.PlayerState.PLAYING;
			$playButton.hide();
		}
	}
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);