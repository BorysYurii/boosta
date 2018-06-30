(function($){
  "use strict";

  window.obj = $.extend({}, {
    winWidth: $(window).width(),
    winHeight: $(window).height(),
    winScroll: $(window).scrollTop(),

    init: function () {

      $('body')
        .addClass('os-' + window.jscd.os.toLowerCase())
				.addClass('browser-' + window.jscd.browser.toLowerCase())
				.attr('data-os-version', window.jscd.osVersion.toLowerCase());

      $(window).scroll(function(){
        obj.winScroll = $(window).scrollTop();
      });

      $(window).resize(function(){
        obj.winWidth = $(window).width();
        obj.winHeight = $(window).height();
        obj.winScroll = $(window).scrollTop();
      });

      obj.initSlider();
    },

    initSlider: function () {
        var writersSlider = $('.slider_js');

        writersSlider.slick({
			slidesToScroll: 2,
			slidesToShow: 2,
            infinite: true,
			dots: true,
			arrows: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
                        slidesToScroll: 1,
            			slidesToShow: 1,
					}
				},
			]
		});
    },


  });

  obj.init();

})(jQuery);


function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
