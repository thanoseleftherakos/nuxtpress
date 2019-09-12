<?php
    /**
     * Adds a front-page endpoint for generell front-page settings in the
     * Front-end
     */
    add_action('rest_api_init', 'nuxtpress_posts_route');


    function nuxtpress_posts_route() {
        register_rest_route('nuxtpress', '/v1/posts', array(
            'methods'  => 'GET',
            'callback' => 'nuxtpress_get_posts'
        ));
    }


    function nuxtpress_get_posts($object){



        $request = new WP_REST_Request('GET', '/wp/v2/posts');
        $response = rest_do_request($request);

        if (!$response->data) {
            return new WP_Error('nuxtpress_no_posts_found', __('No posts found'), array('status' => 404));
        }

        $embed = $object->get_param('_embed') !== NULL;
        $data = rest_get_server()->response_to_data($response, $embed);

        return $data;
    }
