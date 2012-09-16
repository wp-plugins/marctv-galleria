/**
 * @preserve Galleria MarcTV Theme 2011-02-14
 *
 */
 
/* global jQuery, Galleria */

(function($) {

  Galleria.addTheme({
    name: 'MarcTV',
    author: 'Marc',
    css: 'galleria.marctv.css',
    defaults: {
      transition: 'slide',
      thumbCrop:  'height',
      _toggleInfo: true
    },
    init: function(options) {
      // detect svg and add body class
      if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")) { 
        $("body").addClass("svg");
      }      

      // add some elements
      this.addElement('info-link','info-close','info-fullscreen');
      this.append({
        'info' : ['info-link','info-close','info-fullscreen']
      });
      
      this.append({
        'stage' : ['info-fullscreen']
      });
      

      // cache some stuff
      var info = this.$('info-link,info-close,info-text'),
      touch = Galleria.TOUCH,
      click = touch ? 'touchstart' : 'click';
        
      // show loader & counter with opacity
      this.$('loader,counter').show().css('opacity', 1);

      // some stuff for non-touch browsers
      if (! touch ) {
        this.addIdleState( this.get('image-nav-left'), {
          left:-50
        });
        this.addIdleState( this.get('image-nav-right'), {
          right:-50
        });
        this.addIdleState( this.get('counter'), {
          opacity:0
        });
        this.addIdleState( this.get('info-fullscreen'), {
          opacity:0
        });
        this.addIdleState( this.get('info-link'), {
          opacity:0
        });
      }
      
      var gal = this;

      this.$('info-fullscreen').click(function() {
        gal.toggleFullscreen(); // toggles the fullscreen
        if(window._gat && window._gat._getTracker){
          _gaq.push(['_trackEvent', 'galleria', 'toggle fullscreen');
        }
      });

     
      // toggle info
      var galleria = this;
      if ( options._toggleInfo === true ) {
        info.bind( click, function() {
          info.toggle();
        });
      } else {
        info.show();
        this.$('info-link, info-close').hide();
      }
      
     
     
     
        
      // bind some stuff
      this.bind('thumbnail', function(e) {
            
        if (! touch ) {
          // fade thumbnails
          $(e.thumbTarget).css('opacity', 0.6).parent().hover(function() {
            $(this).not('.active').children().stop().fadeTo(100, 1);
          }, function() {
            $(this).not('.active').children().stop().fadeTo(400, 0.6);
          });
                
          if ( e.index === options.show ) {
            $(e.thumbTarget).css('opacity',1);
          }
                   
        }
               
      });
 
      
      this.bind('fullscreen_enter', function(e) {
        this.$('info-fullscreen').toggleClass('close');
        $('body').toggleClass('no-fullscreen');
        this.rescale();
      });
        
      this.bind('fullscreen_exit', function(e) {
        this.$('info-fullscreen').toggleClass('close');
        $('body').toggleClass('no-fullscreen');
        this.rescale();
      });
 
 
 
      this.bind('loadstart', function(e) {
   
        if (!e.cached) {
          this.$('loader').show();
        }
            
        this.$('info').toggle( this.hasInfo() );
            
        $(e.thumbTarget).css('opacity',1).parent().siblings().children();
        
                   
      });
        
      this.bind('loadfinish', function(e) {
        this.$('loader').fadeOut(200);
      });
      
      this.bind('image', function(e) {
        if(e.index > 0 && this._options.idleMode !== true){
          this._options.idleMode = true;
        }
        
        if(e.index > 0 && window._gat && window._gat._getTracker){
          _gaq.push(['_trackEvent', 'galleria', 'Next', this._data[0].title, e.index]);
        }
      });
     
    }
  });

}(jQuery));
