$(document).ready(function(){
	var owl = $('.herobanner-inner.owl-carousel');

	owl.owlCarousel({
    items:1,
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

	$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
});