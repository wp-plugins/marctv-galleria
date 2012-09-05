(function($) {
    
  $(document).ready(function($) {
    if($(".marctv-gallery").length > 0){
      
      $('body').addClass('no-fullscreen');
      
      Galleria.loadTheme('/wp-content/plugins/marctv-galleria/galleria/themes/marctv/galleria.marctv.js');
      
      $(".marctv-gallery").galleria({
        width:"auto",
        height: 0.43,
        idleMode: false,
        responsive: true,
        idleTime: 2000,
        transitionSpeed: 200,
        initialTransition: "none",
        debug: false,
        showInfo: true,
        imageCrop: true,
        imagePanSmoothness: 30,
        fullscreenCrop: true,
        trueFullscreen: true,
        fullscreenDoubleTap: true,
        easing: 'galleriaOut',
        thumbnails: true,
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