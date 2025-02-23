<?php
class Elementor_Booking_Widget extends \Elementor\Widget_Base {
    public function get_name() {
        return 'booking_widget';
    }

    public function get_title() {
        return 'Booking Widget';
    }

    public function get_icon() {
        return 'eicon-calendar';
    }

    public function get_categories() {
        return ['general'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => 'Content',
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => 'Button Text',
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'Book Now',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="booking-widget-trigger elementor-button elementor-size-sm">
            <?php echo esc_html($settings['button_text']); ?>
        </div>
        <div data-widget="booking-widget"></div>
        <script>
        (function() {
            // Function to load script and return a promise
            const loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.async = true;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.body.appendChild(script);
                });
            };

            // Load scripts after page load
            window.addEventListener('load', function() {
                // Small delay to ensure page is fully rendered
                setTimeout(() => {
                    if (!window.bookingWidgetLoaded) {
                        window.bookingWidgetLoaded = true;
                        
                        // Load scripts in sequence
                        loadScript(bookingWidgetData.scripts.vendor)
                            .then(() => loadScript(bookingWidgetData.scripts.core))
                            .then(() => loadScript(bookingWidgetData.scripts.main))
                            .then(() => {
                                if (window.initBookingWidget) {
                                    window.initBookingWidget();
                                }
                            });
                    }
                }, 100); // Small delay for better performance
            });

            // Handle button click
            document.querySelector('.booking-widget-trigger').addEventListener('click', function(e) {
                e.preventDefault();
                // The scripts will already be loaded, just need to show the popup
                if (window.showBookingPopup) {
                    window.showBookingPopup();
                }
            });
        })();
        </script>
        <?php
    }
}
