<?php

    /**
     * Adds a front-page endpoint for generell front-page settings in the
     * Front-end
     */
    add_action('rest_api_init', 'nuxtpress_initialize');


    function nuxtpress_initialize() {
        register_rest_route('nuxtpress', '/v1/initalize', array(
            'methods'  => 'GET',
            'callback' => 'nuxtpress_get_initialization'
        ));
    }


    function nuxtpress_get_initialization( $object ) {

        $response = new stdClass();
        // return icl_get_languages();
        $request  = new WP_REST_Request( 'GET', '/wp/v2/posts' );

        $frontpage_id = get_option( 'page_on_front' );
        
        if ( $frontpage_id ) {
            foreach(icl_get_languages() as $language) {
                $id = icl_object_id($frontpage_id, 'page', false,$language['code']);
                $response->frontpage_id[$language['code']] = $id;    
            }
        } else {
            return new WP_Error( 'nuxtpress_fontpage_error', __( 'Please set  a frontpage on wordpress' ), array( 'status' => 500 ) );
        }
        // print_r(icl_strings);
        return $response;

        // $response = rest_do_request( $request );
        // if ($response->is_error()) {
        //     return new WP_Error( 'nuxtpress_request_error', __( 'Request Error' ), array( 'status' => 500 ) );
        // }

        // $embed = $object->get_param( '_embed' ) !== NULL;
        // $data = rest_get_server()->response_to_data( $response, $embed );

        // return $data;

    }
