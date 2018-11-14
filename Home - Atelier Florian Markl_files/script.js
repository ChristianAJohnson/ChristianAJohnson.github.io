function moveToSection(section, offset){

	if (typeof(offset) == 'undefined') offset = 0;
	jQuery('html, body').stop().animate({
		scrollTop: (jQuery(section).offset().top + offset)
	}, 800
	);
}

function getLangTag(){
	return window.location.pathname.split('/')[1];
}

jQuery(document).ready(function(){
	
	jQuery('.projectSingleFirstRow .sppb-addon-single-image-container').each(function(){
		var imgSrc = jQuery(this).find('img').attr('src');
		jQuery(this).css('background-image', 'url('+imgSrc+')');
	});	

	var langTag = getLangTag();

	jQuery(window).load(function(){

		// Slider
		if(jQuery('.projectssub').length){

			// Click event to open slider
			$sliderImg = jQuery('section:not(.projectSingleFirstRow) .sppb-addon-single-image-container img');

			$sliderImg.click(function(){
				var langClose = '';
				if(langTag == 'de'){
					langClose = 'schließen';
				} else {
					langClose = 'close';
				}
				// Create Slider html
				var sliderhtml = '<div class="slideOverlay"><div class="slider">';
				var sliderIndex = $sliderImg.index(this);
				var sliderCountTotal = $sliderImg.length;
				jQuery('.sppb-section:not(.projectSingleFirstRow) .sppb-addon-single-image-container').each(function(){
					var imgSrc = jQuery(this).find('img').attr('src');
					// sliderhtml += '<div class="slide" style="background-image: url('+imgSrc+')"></div>';
					sliderhtml += '<div class="slide"><img src="'+imgSrc+'" alt="slideshow" /></div>';
				});
				sliderhtml += '</div><div class="controlSlider"><div class="countSlider"><span class="countSliderCurrent">1</span>/<span class="countSliderTotal">'+sliderCountTotal+'</span></div><div class="closeSlider">'+langClose+'</div></div></div>';
				jQuery('.page-content').append(sliderhtml);

				// add open class (superfluous?)
				jQuery('.slideOverlay').addClass('open');

				// console.log(sliderIndex);

				// initiate slider
				jQuery('.slider').slick({
					infinite: true,
					initialSlide: sliderIndex
				});

				jQuery('.countSliderCurrent').text(sliderIndex+1);
				
				jQuery('.slider').on('afterChange', function(event, slick, currentSlide){
					jQuery('.countSliderCurrent').text(currentSlide+1);
				});
		
				jQuery('body').addClass('slideopen');

				// Close slider
				jQuery('.closeSlider').click(function(){
					jQuery('.slideOverlay').remove();
					jQuery('body').removeClass('slideopen');
				});
			});
		}

		if(jQuery('body.projects').length){
			if(window.location.hash){
				// var hash = window.location.hash.substr(window.location.hash.length - 1);
				var hash = window.location.hash.split('-');
				var id = jQuery('.page-content section:not(:first-child)').eq(hash[1]).attr('id')
				moveToSection('#' + id, -72);
			}
		}


		if(window.location.hash){
			if(window.location.hash == '#datenschutz'){
				moveToSection('.fullScreenRow .sppb-col-md-4:nth-child(4)', -50);
			}
		}
	});

	// Build Navigation
	var $projectNav = jQuery('.project_navigation');
	if($projectNav.length){
		var $curr = jQuery('.menuBlock li.current');
		var $prev = $curr.prev();
		var $next = $curr.next();
		var currIndex = jQuery('.menuBlock li').index(jQuery('.menuBlock li.current'));
		
		// console.log(currIndex);

		if($prev.length){
			$projectNav.find('span.prev a').attr('href', $prev.find('a').attr('href'));
		} else {
			$projectNav.addClass('no-prev');
		}
		if($next.length){
			$projectNav.find('span.next a').attr('href', $next.find('a').attr('href'));
		} else {
			$projectNav.addClass('no-next');
		}

		var $overview = jQuery('.overview a');
		$overview.attr('href', $overview.attr('href') + '#project-' + currIndex);
	}

	if(jQuery('.videoOverlay').length){
		jQuery('.videoOverlay').each(function(){
			var video;
			var videoControl = 
				`<div class="controlOverlay clearfix">
					<div class="videoPrev"></div>
					<div class="videoPause"></div>
					<div class="videoNext"></div>
				</div>`;
			var langClose = '';
			if(langTag == 'de'){
				langClose = 'schließen';
			} else {
				langClose = 'close';
			}
			var videoClose =
				`<div class="videoClose">`+langClose+`</div>`;
			jQuery(this).find('.sppb-addon-content').append(videoControl);
			jQuery(this).find('.sppb-addon-content .controlOverlay').append(videoClose);

			jQuery(this).find('.videoPause').click(function(){
				video = jQuery('video.shown').get(0);
				// video.play();
				if (video.paused == true) {
					video.play();
					jQuery(this).removeClass('paused');
				} else {
					video.pause();
					jQuery(this).addClass('paused');
				}
			});

			jQuery('.videoNext').click(function(){
				var $current = jQuery('.videoOverlay video.shown');
				var $next = '';
				$current.removeClass('shown');
				$current.get(0).pause();
				if($current.next('video').length){
					$next = $current.next();
				} else {
					$next = jQuery('.videoOverlay video:first-child');
				}
				$next.addClass('shown');
				$next.get(0).play();
				jQuery('.videoPause').removeClass('paused');
			});
		
			jQuery('.videoPrev').click(function(){
				var $current = jQuery('.videoOverlay video.shown');
				var $prev;
				$current.removeClass('shown');
				$current.get(0).pause();
				if($current.prev('video').length){
					$prev = $current.prev();
				} else {
					$prev = jQuery('.videoOverlay video:last-of-type');
				}
				$prev.addClass('shown');
				$prev.get(0).play();
				jQuery('.videoPause').removeClass('paused');
			});

			jQuery('.videoClose').click(function(){
				jQuery('.videoOverlay').removeClass('open');
				jQuery('.videoOverlay video').removeClass('shown');
				jQuery('body').removeClass('videoopen');
			});
		});
	}

	// Click events
	jQuery('.menu').click(function(){
		jQuery(this).toggleClass('open');
		jQuery('#navigation').toggleClass('open');
		jQuery('body').toggleClass('menuOpen');
	});

	jQuery('.startInteractive.projects').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/projekte';
		} else {
			window.location.href = '/en/projects';
		}
	});

	jQuery('.startInteractive.info').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/info';
		} else {
			window.location.href = '/en/info';
		}
	});

	jQuery('.startInteractive.contact').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/kontakt';
		} else {
			window.location.href = '/en/contact';
		}
	});

	jQuery('.startInteractive.lab').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/lab';
		} else {
			window.location.href = '/en/lab';
		}
	});

	jQuery('.startInteractive.relax').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/relax';
		} else {
			window.location.href = '/en/relax';
		}
	});

	jQuery('.startInteractive.shop').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/shop';
		} else {
			window.location.href = '/en/shop';
		}
	});

	jQuery('.startInteractive.imprint').click(function(){
		if(langTag == 'de'){
			window.location.href = '/de/impressum';
		} else {
			window.location.href = '/en/imprint';
		}
	});

	jQuery('.startInteractive.lang').click(function(){
		if(langTag == 'de'){
			window.location.href = '/en';
		} else {
			window.location.href = '/de';
		}
	});

	// FadeIn
	jQuery('.start #navigation span').each(function(){
		jQuery(this).css('opacity', '0');
		jQuery(this).stop().delay(800).animate({
			opacity : 1
		}, 2000);
	});

	// Relax
	jQuery('.videoPopup').click(function(){
		var vpIndex = jQuery('.videoPopup').index(this);
		jQuery('.videoOverlay').addClass('open');
		var $currVid = jQuery('.videoOverlay').find('video:nth-child('+(vpIndex+1)+')');
		$currVid.addClass('shown');
		$currVid.get(0).play();
		jQuery('body').addClass('videoopen');
	});

	jQuery('.controlOverlay').mousemove(function(){
		jQuery(this).find('> div').css('display', 'block');
		clearTimeout(jQuery(this).data('timeoutId'));
		var someElement = jQuery(this),
			timeoutId = setTimeout(function(){
				someElement.find('> div').fadeOut('slow');
			}, 2000);
		someElement.data('timeoutId', timeoutId); 
	});


	// Keyup
	jQuery(document).keydown(function(e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`
			jQuery('.videoOverlay').removeClass('open');
			jQuery('.videoOverlay video').removeClass('shown');
			jQuery('.slideOverlay').remove();
			jQuery('body').removeClass('slideopen');
			jQuery('body').removeClass('videoopen');
		}
   });
});