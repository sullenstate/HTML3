$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 292) {
			$('.sidebar').css({
				'position' 	: 'fixed',
				'top'		: "3px",
				'left'		: ($(window).width() - $('.blog-post').width())/2 + $('.blog-post').width() + 20 + 'px',
			});
		}	else {
			$('.sidebar').css({
				'position' 	: 'absolute',
				'top'		: "287px",
				'left'		: '635px',
			});
		}
	});
	
	$(window).resize(function(){
		if ($('.sidebar').css('position') === 'fixed') {
				$('.sidebar').css({
				'left'		: ($(window).width() - $('.blog-post').width())/2 + $('.blog-post').width() + 20 + 'px',
			});
		} else {
			$('.sidebar').css({
				'left'		: '635px',
			});
		}
	});
});
