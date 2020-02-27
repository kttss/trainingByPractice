/*
 * carousels Functions
 * */
SCP.carousels = {
	init: function () {
		var $carouselSlider = $(".lame-carousel.owl-carousel");
		$carouselSlider.owlCarousel({
			items: 1,
			nav: true,
			navText: ["<span class='icon icon-back'></span>", "<span class='icon icon-next'></span>"],
		});
	}
};
