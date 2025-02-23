<?php
/**
 * Add Elementor button integration
 */

class BookingWidgetElementorIntegration {
    public function __construct() {
        add_action('elementor/element/button/section_button/after_section_end', [$this, 'add_booking_widget_controls'], 10, 2);
        add_action('elementor/widget/before_render_content', [$this, 'add_booking_widget_attributes']);
    }

    public function add_booking_widget_controls($element, $args) {
        $element->start_controls_section(
            'booking_widget_section',
            [
                'label' => 'Booking Widget',
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $element->add_control(
            'enable_booking_widget',
            [
                'label' => 'Enable Booking Widget',
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => 'Yes',
                'label_off' => 'No',
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $element->end_controls_section();
    }

    public function add_booking_widget_attributes($widget) {
        if ($widget->get_name() !== 'button') {
            return;
        }

        $settings = $widget->get_settings_for_display();
        
        if (isset($settings['enable_booking_widget']) && $settings['enable_booking_widget'] === 'yes') {
            // Add necessary attributes and container
            add_action('elementor/widget/render_content', function($content, $widget) {
                if ($widget->get_name() !== 'button') {
                    return $content;
                }

                // Add booking widget container after button
                $content .= '<div data-widget="booking-widget"></div>';

                // Modify button to have booking widget trigger class
                $content = str_replace('elementor-button-wrapper', 'elementor-button-wrapper booking-widget-trigger', $content);
                
                return $content;
            }, 10, 2);

            // Add custom click handler
            add_action('elementor/frontend/after_render', function() {
                ?>
                <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const buttons = document.querySelectorAll('.booking-widget-trigger .elementor-button');
                    buttons.forEach(button => {
                        button.addEventListener('click', function(e) {
                            e.preventDefault();
                            if (window.showBookingPopup) {
                                window.showBookingPopup();
                            }
                        });
                    });
                });
                </script>
                <?php
            });
        }
    }
}

// Initialize the integration
new BookingWidgetElementorIntegration();
