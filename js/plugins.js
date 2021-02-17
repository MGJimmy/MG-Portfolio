/*global $, document,  */

/* styleford */




//******************** Start Loading screen **************************************
$(window).on('load', function () {
	'use strict';
	
	$('.loading .sk-chase, .loading').fadeOut(2000, function () {
		// show the scroll
		$('html').css('overflow', 'auto');
		
		// remove loading div from Html
		$(this).remove();
		
		
	});
	
	
});

//******************** End Loading screen **********************

/*page go to top on reload
window.onbeforeunload = function () {
	'use strict';
	window.scrollTo(0, 0);
};
*/


$(document).ready(function () {
	'use strict';
		
		// variables for scroll to top button
	var scrollButton = $('.scroll_top'),
		page = $('html');
		
	
	//**************** Start progress bar **********************
	$(window).on('scroll', function () {
		var windowTop = $(window).scrollTop(),
			windowBottom = windowTop + $(window).innerHeight(),
			progressPos = $('#progress').offset().top + $('#progress').innerHeight() / 2;
		if (windowBottom >= progressPos) {
			$('.bar_fill').addClass('w-100');
		}
	});
	
		
	//**************** End progress bar **********************	
		

	//***************** Start scroll to top button ******************
	$(scrollButton).on('click', function () {
		$(page).animate({
			scrollTop: '0'
		}, 1500);
	});
	
	// Show & hide scroll button on scroll
	$(window).on('scroll', function () {
		
		if ($(this).scrollTop() > 500) {
			$(scrollButton).show();
			
		} else {
			$(scrollButton).fadeOut(500);
		}
	});
	//***************** End scroll to top button *********************
	
	//**************** Start owl carousel *********************
	$('.owl-carousel').owlCarousel({
		loop: true,
		rtl:true,
		stagePadding: 150,
		margin: 30,
		nav: false,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				stagePadding: 100,
				items: 1
			},
			600: {
				stagePadding: 130,
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	//**************** End owl carousel *********************
	
	
	
	
});


