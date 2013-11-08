(function($) {

  $(document).ready(function($) {
    if ($(".marctv-gallery").length > 0) {

      $('body').addClass('no-fullscreen');

      Galleria.loadTheme('/wp-content/plugins/marctv-galleria/galleria/themes/marctv/galleria.marctv.js');

      $(".marctv-gallery").galleria({
        width: "auto",
        height: 0.43,
        idleMode: false,
        responsive: true,
        idleTime: 2000,
        transitionSpeed: 300,
        initialTransition: "none",
        debug: false,
        showInfo: true,
        imageCrop: true,
        fullscreenCrop: true,
        trueFullscreen: true,
        fullscreenDoubleTap: false,
        thumbnails: false,
        dataConfig: function(img) {
          return {
            title: $(img).attr('title'),
            description: $(img).parents('.gallery-item').find('.gallery-caption').text()
          };

        }
      });
    }
  });
})(jQuery);
