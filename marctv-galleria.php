<?php

/*
  Plugin Name: MarcTV Galleria
  Plugin URI: http://marctv.de/blog/marctv-wordpress-plugins/
  Description: Replaces the gallery code with a neat sliding image gallery. Based on the mighty Galleria http://galleria.io/ it comes with responsiveness and touch events!
  Version: 2.0.4
  Author: MarcDK
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
  $version = '2.0.4';

  wp_enqueue_style(
      "jquery.marctv-galleria-style", WP_PLUGIN_URL . "/marctv-galleria/galleria/themes/classic/galleria.classic.css", false, $version);

  wp_enqueue_style(
      "jquery.marctv-galleria-add-style", WP_PLUGIN_URL . "/marctv-galleria/marctv-galleria.css", false, $version);

  wp_enqueue_script(
      "marctv-galleria-js", WP_PLUGIN_URL . "/marctv-galleria/galleria/galleria-1.3.6.js", array("jquery"), "1.3.6", 0);

  wp_enqueue_script(
      "marctv-galleria-theme", WP_PLUGIN_URL . "/marctv-galleria/galleria/themes/classic/galleria.classic.js", array("jquery"), $version, 0);

  wp_enqueue_script(
      "marctv-galleria-picasa-wrapper", WP_PLUGIN_URL . "/marctv-galleria/marctv.galleria-init.js", array("jquery"), $version, 1);
}

function marctv_gallery_style() {
  return "<div class='marctv-gallery'>";
}

function marctv_gallery_atts($out, $pairs, $atts) {

  $atts = shortcode_atts(array(
    'columns' => '9',
    'size' => 'galleria-thumb',
      ), $atts);

  $out['columns'] = $atts['columns'];
  $out['size'] = $atts['size'];

  return $out;
}

function marctv_galleria_add_new_image_size() {
  if (function_exists('add_image_size')) {
    add_image_size('galleria-thumb', 51, 40, true);
  }
}

add_action('init', 'marctv_galleria_add_new_image_size');

add_filter('shortcode_atts_gallery', 'marctv_gallery_atts', 10, 3);

add_filter('gallery_style', 'marctv_gallery_style', 99);

add_action('wp_print_styles', 'marctv_galleria_head');
