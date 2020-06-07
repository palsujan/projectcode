
jQuery(document).ready(function(){

	
	const humbargerBtn = jQuery('.humbergarBtn');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});


	$('.row-videoWrap.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    responsiveClass:true,
    margin:5,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            nav:false
        },
        992:{
            items:4,
            nav:true,
            loop:true
        },
        1200:{
            items:5,
            nav:true,
            loop:true
        }
    }
});

$('.row-testimonial.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});

	$(".sitenav a").click(function() {
		// This prevents the default 'jump to' behaviour if JavaScript is enabled,
		// whilst keeping the functionality there for when JavaScript isn't enabled
		event.preventDefault();
    
	    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 500);
	    
	    $('.sitenav a').removeClass('active');
	    $(this).addClass('active');
	    return true;
	});

});
