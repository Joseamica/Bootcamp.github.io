function sliderSiblings(selectedIndex, sliderID){

	var	slider = '#'+sliderID,
			length = jQuery(slider + " .sp-slides").children().length,
			prevIndex = (length + (selectedIndex - 1))%length,
			nextIndex = (selectedIndex + 1)%length;
			
	// console.log(selectedIndex);
	// console.log(length);

	jQuery(slider + " .sp-slide").removeClass('next prev');
	
	jQuery(jQuery(slider + " .sp-slide").get(prevIndex)).addClass('prev');
	jQuery(jQuery(slider + " .sp-slide").get(nextIndex)).addClass('next');
	
}

jQuery(document).ready(function() {
	
	
	
	var mainSlider = jQuery('#slider'),
			musicSlider = jQuery('#music-slider'),
			videoSlider = jQuery('#video-slider');
	
	
	// init the main slider
	mainSlider.sliderPro({
		width: 1280,
		height: 686,
		autoHeight: true,
		loop: false,
		fade: false,
		arrows: true,
		fadeArrows: false,
		imageScaleMode: 'contain',
		buttons: false,
		slideDistance: 0,
		autoScaleLayers: true,
		updateHash: false,
		keyboardOnlyOnFocus: true,
		leaveVideoAction: 'removeVideo',
		breakpoints: {
			1199: {
				width: '100%',
				height: '500',
				autoplay: false,
			}, 
			991:{
				width: '100%',
				height: '446'
			},
			767:{
				width: '100%',
				height: '400',
			},
			480:{
				height: '250'	
			},
			379:{
				height: '228'	
			}
		},
	});
	
	// init the music slider
	musicSlider.sliderPro({
		width:363,
		height:363,
		visibleSize: '93.5%',
		imageScaleMode: 'none',
		autoHeight: true,
		autoplay: false,
		fade: false,
		arrows: true,
		fadeArrows: false,
		buttons: false,
		slideDistance: 12,
		fadeCaption: false,
		loop:true,
		updateHash: false,
		keyboardOnlyOnFocus: true,
		breakpoints: {
			1199: {
				width:320
			}, 
			991:{
				visibleSize: '100%',
			}
		},
		init: function(){
			var	length = jQuery("#music-slider .sp-slides").children().length,
					prevIndex = (length + (0 - 1))%length,
					nextIndex = (0 + 1)%length;
		
			jQuery("#music-slider .sp-slide").removeClass('next prev');
			
			jQuery(jQuery("#music-slider .sp-slide").get(prevIndex)).addClass('prev');
			jQuery(jQuery("#music-slider .sp-slide").get(nextIndex)).addClass('next');
			jQuery('#music-slider .sp-slide .sp-image-container').addClass('css3');
		}
	});
	
	// init the music slider
	videoSlider.sliderPro({
		width:969,
		visibleSize: '100%',
		imageScaleMode: 'none',
		autoHeight: true,
		autoplay: false,
		fade: false,
		arrows: true,
		fadeArrows: false,
		buttons: false,
		slideDistance: 98,
		updateHash: false,
		keyboardOnlyOnFocus: true,
		leaveVideoAction: 'removeVideo',
		breakpoints: {
			1199: {
				width:778
			},
			991:{
				width:720
			}
		},
		init: function(){
			var	length = jQuery("#video-slider .sp-slides").children().length,
					prevIndex = (length + (0 - 1))%length,
					nextIndex = (0 + 1)%length;
		
			jQuery("#video-slider .sp-slide").removeClass('next prev');
			
			jQuery(jQuery("#video-slider .sp-slide").get(prevIndex)).addClass('prev');
			jQuery(jQuery("#video-slider .sp-slide").get(nextIndex)).addClass('next');
		}
	});
	
	musicSlider.add(videoSlider).on("gotoSlide", function(event) {
		sliderSiblings(event.index, event.target.id);
	});
	
	jQuery('.sp-video-embed').on('click', function(e){ 
		e.preventDefault();
		var embedHeight = jQuery(this).height();
		var embedHolder = jQuery(this).closest('div').find('.video-embed');
		var embedSource = embedHolder.data('embed');
		//jQuery(embedHolder).html(embed);
		jQuery(this).closest('div').find('.video-embed iframe').attr('height', embedHeight);
		jQuery(this).closest('div').find('.video-embed iframe').attr('src', embedSource);
		jQuery(embedHolder).removeClass('hide');
		jQuery(this).hide();
	});
	
	mainSlider.on("gotoSlide", function() {
		jQuery('#slider .sp-video-embed').show();
		jQuery('#slider .video-embed').addClass('hide');
		jQuery('#slider .video-embed iframe').attr('src', '');
	});
	
	videoSlider.on("gotoSlide", function() {
		jQuery('#video-slider .sp-video-embed').show();
		jQuery('#video-slider .video-embed').addClass('hide');
		jQuery('#video-slider .video-embed iframe').attr('src', '');
	});
  
	/*
	// detecting if a user scrolls up or down
	var lastScrollTop = 0;
	$(window).scroll(function(){
		 var st = $(this).scrollTop();
		 if (st > lastScrollTop){
				 console.log('scrolling down');
		 } else {
				 console.log('scrolling up');
		 }
		 lastScrollTop = st;
	});
	*/
});