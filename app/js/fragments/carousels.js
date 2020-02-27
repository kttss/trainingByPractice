/*
 * carousels Functions
 * */
SCP.carousels = {
	init: function () {
		var $carouselSlider = $(".lame-carousel.owl-carousel"),
			$carouselTimer = $(".lame-timeline__inner.owl-carousel");

		$carouselSlider.owlCarousel({
			items: 1,
			nav: true,
			navText: ["<span class='icon icon-back'></span>", "<span class='icon icon-next'></span>"],
		});

		$carouselTimer.owlCarousel({
			items: 1,
			nav: true,
			navText: ["<span class='icon icon-left-arrow'></span>", "<span class='icon icon-right'></span>"],
			dots: true,
			smartSpeed: 1000
		});

		$carouselTimer.on("changed.owl.carousel", function (e) {
			var index = e.page.index;
			$(this).find(".owl-dot.active").index();
			console.log($(this).find(".owl-dot.active").prevAll());
			$(this).find(".owl-dot.active").prevAll().addClass("before-dot");
			console.log($(this).find(".owl-dot.active").nextAll());
			$(this).find(".owl-dot.active").removeClass("before-dot");
			$(this).find(".owl-dot.active").nextAll().removeClass("before-dot");

			if (index == 3) {
				$(this).find(".owl-dot.active").addClass("last-before");
			} else {
				$(this).find(".owl-dot").removeClass("last-before");
			}
		});
	}
};
