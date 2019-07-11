<?php 

////////////////////////////////////////////////////////////////////
// Theme setup
////////////////////////////////////////////////////////////////////
function nuxtpress_setup() {

    add_theme_support( 'post-thumbnails' );

}
add_action( 'after_setup_theme', 'nuxtpress_setup' );

////////////////////////////////////////////////////////////////////
// Menus registration
////////////////////////////////////////////////////////////////////
function nuxtpress_menus() {

    register_nav_menus( array(
        'primary' => esc_html__( 'Primary', 'nuxtpress' ),
    ) );

}
add_action( 'init', 'nuxtpress_menus' );


////////////////////////////////////////////////////////////////////
// Add support for Advcanced Customs Field Options Page
////////////////////////////////////////////////////////////////////
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Nuxtpress General Settings',
        'menu_title'    => 'Nuxtpress Settings',
        'menu_slug'     => 'nuxtpress-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}
////////////////////////////////////////////////////////////////////
// Thumbnails setup
////////////////////////////////////////////////////////////////////
add_action( 'after_setup_theme', 'thumb_setup' );
function thumb_setup() {
    // add_image_size( 'sample-thumb', 50, 50, true );
}

////////////////////////////////////////////////////////////////////
// Add option for custom post type (optional)
////////////////////////////////////////////////////////////////////
function custom_post_gallery() {
    $labels = array(
      'name'               => _x( 'Gallery', 'nuxtpress gallery' ),
      'singular_name'      => _x( 'Gallery', 'nuxtpress gallery' ),
      'add_new'            => _x( 'Add New', 'gallery' ),
      'add_new_item'       => __( 'Add New Item' ),
      'edit_item'          => __( 'Edit Item' ),
      'new_item'           => __( 'New Item' ),
      'all_items'          => __( 'All Items' ),
      'view_item'          => __( 'View Item' ),
      'search_items'       => __( 'Search Items' ),
      'not_found'          => __( 'No item found' ),
      'not_found_in_trash' => __( 'No items found in the Trash' ),
      'parent_item_colon'  => '',
      'menu_name'          => 'Gallery'
    );
    $args = array(
      'labels'        => $labels,
      'description'   => 'Holds our gallery specific data',
      'public'        => true,
      'menu_position' => 2,
      'menu_icon'     => 'dashicons-palmtree',
      'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
      'has_archive'   => true,
      'rewrite' => array( 'slug' => 'gallery'),
      'show_ui'             => true,
      'show_in_menu'        => true,
      'show_in_nav_menus'   => true
    );
    register_post_type( 'gallery', $args );
  }
  //uncomment to add custom post type gallery
  // add_action( 'init', 'custom_post_gallery' ); 






  require_once(dirname(__FILE__) . '/api_helpers/front-page.php');

  // adding a menu endpoint
  require_once(dirname(__FILE__) . '/api_helpers/menu.php');

  // adding a slug endpoint
  require_once(dirname(__FILE__) . '/api_helpers/slug.php');

  // integrating common meta-fields
  require_once(dirname(__FILE__) . '/api_helpers/meta.php');

  // activating generate queries
  require_once(dirname(__FILE__) . '/api_helpers/generate.php');