/*
 * fancyBox Functions
 * */
SCP.fancyBox = {
	init: function () {
		$("[data-fancybox]").fancybox({
			iframe: {
				css: {
					width: '100%'
				}
			},
			loop: false
		});
	}
};
