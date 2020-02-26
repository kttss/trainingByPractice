/*
 * carousels Functions
 * */
SCP.carousels = {
	init: function () {
		var $carouselSlider = $(".lame-carousel.owl-carousel");
		$carouselSlider.owlCarousel({
			items: 1,
			nav: true
		});
	}
};
