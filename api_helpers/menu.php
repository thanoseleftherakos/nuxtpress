<?php
/**
 * Adds a menu endpoint
 */
require_once(dirname(__FILE__) . '/classes/menu-array.class.php');
add_action('rest_api_init', 'nuxtpress_route_menu');


function nuxtpress_route_menu()
{
    register_rest_route('nuxtpress', '/v1/menu', array(
        'methods' => 'GET',
        'callback' => 'nuxtpress_get_menu',
    ));
}


function nuxtpress_get_menu($params)
{
    $params = $params->get_params();
    $theme_locations = get_nav_menu_locations();

    if (!isset($params['location'])) {
        $params['location'] = 'primary';
    }

    if (!isset($theme_locations[$params['location']])) {
        return new WP_Error('nuxtpress_menu_error', __('Menu location does not exist'), array('status' => 404));
    }

    $menu_obj = get_term($theme_locations[$params['location']], 'nav_menu');

    if (!$menu_obj) {
        return new WP_Error('nuxtpress_menu_error', __('Menu location does not exist'), array('status' => 404));
    }

    $menu = new nuxtpress_Menu($params['location']);

    return $menu->getTree();
}
