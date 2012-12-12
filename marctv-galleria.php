<?php
/*
  Plugin Name: MarcTV Galleria
  Plugin URI: http://www.marctv.de
  Description: Replaces the gallery code with a neat sliding image gallery. Based on the mighty Galleria http://galleria.io/ it comes with responsiveness and touch events! Includes Google Analytics Events, too!
  Version: 1.7.2
  Author: Marc Tönsing
  Author URI: http://www.marctv.de
  License: GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.
  your option) any later version.
  
  This software uses the galleria http://galleria.io framework which uses the MIT License. 
  The license is also GPL-compatible, meaning that the GPL permits combination 
  and redistribution with software that uses the MIT License.

 */



function marctv_galleria_head() {
  $version = '1.7.2';

  wp_enqueue_style(
          "jquery.marctv-galleria-style", 
          WP_PLUGIN_URL . "/marctv-galleria/galleria/themes/marctv/galleria.marctv.css",
          false, $version);

  wp_enqueue_script(
          "marctv-galleria-js", 
          WP_PLUGIN_URL . "/marctv-galleria/galleria/galleria-1.2.8.js",
          array("jquery"), "1.2.8" , 0);
 
  wp_enqueue_script(
          "marctv-galleria-theme", 
          WP_PLUGIN_URL . "/marctv-galleria/galleria/themes/marctv/galleria.marctv.js",
          array("jquery"), $version, 0);

   wp_enqueue_script(
          "marctv-galleria-picasa-wrapper", 
           WP_PLUGIN_URL . "/marctv-galleria/marctv.galleria.js",
          array("jquery"), $version, 0);

}

function marctv_gallery_style() {
  return "<div class='marctv-gallery'>";
}


add_filter( 'gallery_style', 'marctv_gallery_style', 99 );

add_action('wp_print_styles', 'marctv_galleria_head');
?>
