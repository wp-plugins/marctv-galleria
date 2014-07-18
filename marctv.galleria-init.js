(function($) {

  $(document).ready(function($) {

    var thumbnails = true;
    var height = 0.5;

    if ($(window).width() < 800) {
      thumbnails = false;
      height = 0.50;
      $("body").addClass('no-thumbnails');
    }

    if ($(".marctv-gallery").length > 0) {

      Galleria.loadTheme('/wp-content/plugins/marctv-galleria/galleria/themes/classic/galleria.classic.js');

      $(".marctv-gallery").galleria({
        width: "auto",
        height: height,
        idleMode: false,
        responsive: true,
        idleTime: 2000,
        initialTransition: "none",
        debug: false,
        showInfo: true,
        imageCrop: true,
        fullscreenCrop: true,
        trueFullscreen: true,
        fullscreenDoubleTap: false,
        thumbnails: thumbnails,
        dataConfig: function(img) {
          return {
            title: $(img).attr('title'),
            description: $(img).parents('.gallery-item').find('.gallery-caption').text()
          };

        },
        extend: function() {

          var gallery = this;

          gallery.addElement('info-fullscreen');
          gallery.append({
            'info': ['info-fullscreen']
          });

          gallery.append({
            'stage': ['info-fullscreen']
          });

          gallery.$('info-fullscreen').click(function() {
            gallery.toggleFullscreen(); // toggles the fullscreen
          });
         
        }
      });

    }
  });
})(jQuery);
