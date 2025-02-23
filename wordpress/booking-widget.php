<?php
/**
 * Plugin Name: Booking Widget
 * Description: A modern booking widget for WordPress
 * Version: 1.0.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) {
    exit;
}

// Include Elementor integration
require_once(__DIR__ . '/elementor-integration.php');

class BookingWidget {
    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('elementor/widgets/register', array($this, 'register_widget'));
    }

    public function enqueue_scripts() {
        // Only enqueue the styles initially
        wp_enqueue_style(
            'booking-widget-styles',
            plugins_url('dist/booking-widget.css', __FILE__),
            array(),
            '1.0.0'
        );

        // Add script paths to localized data
        wp_localize_script(
            'jquery',
            'bookingWidgetData',
            array(
                'scripts' => array(
                    'vendor' => plugins_url('dist/vendor.js', __FILE__),
                    'core' => plugins_url('dist/booking-core.js', __FILE__),
                    'main' => plugins_url('dist/booking-widget.js', __FILE__)
                )
            )
        );
    }

    public function register_widget($widgets_manager) {
        require_once(__DIR__ . '/widgets/booking-widget.php');
        $widgets_manager->register(new \Elementor_Booking_Widget());
    }
}

// Initialize the plugin
new BookingWidget();
