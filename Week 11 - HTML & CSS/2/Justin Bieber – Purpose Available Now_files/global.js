jQuery(document).ready(function() {
	jQuery('.menu-item-18 a').addClass('tracking-event').attr('data-tracking-event', 'Visit|Store');
	jQuery('.menu-item-20 a').addClass('tracking-event').attr('data-tracking-event', 'Social|Instagram');
	
	// hotdog nav trigger
	jQuery('#nav-trigger').click(function(e){
		e.preventDefault();
		jQuery('body').toggleClass('nav-open');
	});
	
	if(jQuery(window).width() > 767) {
		// fixing the nav
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 180) {
				jQuery("#header-main").addClass('small');
			} else if (jQuery(this).scrollTop() <= 180) { 
				jQuery("#header-main").removeClass('small');
			}
			
			if (jQuery(this).scrollTop() > 190) {
				jQuery("body").addClass('fixed-nav');
				//jQuery("#logo-transition").addClass("col-sm-6").removeClass("col-sm-12");
			} else if (jQuery(this).scrollTop() <= 190) {
				jQuery('body').removeClass('fixed-nav nav-open');
				//jQuery("#logo-transition").addClass("col-sm-12").removeClass("col-sm-6");
			}
		});
	} else {
		jQuery("body").addClass('fixed-nav');
		//jQuery("#logo-transition").addClass("col-sm-6").removeClass("col-sm-12");
	}
	
	jQuery('.fancybox').fancybox({
		padding:0,	
		helpers: { 
        title: null
    }
	});
	
});
