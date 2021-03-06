(function ($) {

    $(document).ready(function ($) {

        var thumbnails = true;
        var height = 0.53;
        var linksize = marctvgalleriajs.linksize;
        var fullscreen = 'full';


        if ($(window).width() < marctvgalleriajs.breakpoint ) {
            linksize = marctvgalleriajs.breaksize;
            fullscreen = marctvgalleriajs.fullscreen;
            thumbnails = false;
            height = 0.43;
            $("body").addClass('no-thumbnails');
        }

        if ($(".marctv-gallery").length > 0) {

            Galleria.loadTheme('/wp-content/plugins/marctv-galleria/galleria/themes/classic/galleria.classic.js');

            $(".marctv-gallery").galleria({
                width: "auto",
                height: height,
                idleMode: false,
                responsive: true,
                preload: 1,
                idleTime: 2000,
                initialTransition: "none",
                debug: false,
                showInfo: true,
                imageCrop: true,
                fullscreenCrop: true,
                trueFullscreen: true,
                fullscreenDoubleTap: false,
                thumbnails: thumbnails,
                dataConfig: function (img) {
                    return {
                        title: $(img).attr('title'),
                        description: $(img).parents('.gallery-item').find('.gallery-caption').text(),
                        image: $(img).data(linksize),
                        big: $(img).data(fullscreen)
                    };

                },
                extend: function () {

                    var gallery = this;

                    gallery.addElement('info-fullscreen');
                    gallery.append({
                        'container': ['info-fullscreen']
                    });

                    gallery.$('info-fullscreen').click(function () {
                        gallery.toggleFullscreen(); // toggles the fullscreen
                    });

                }
            });

        }
    });
})(jQuery);
