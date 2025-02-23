<?php
class BookingWidgetAdmin {
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    }

    public function add_admin_menu() {
        add_menu_page(
            'Booking Widget', 
            'Booking Widget',
            'manage_options',
            'booking-widget',
            array($this, 'render_admin_page'),
            'dashicons-calendar-alt',
            20
        );

        add_submenu_page(
            'booking-widget',
            'Services',
            'Services',
            'manage_options',
            'booking-widget-services',
            array($this, 'render_services_page')
        );

        add_submenu_page(
            'booking-widget',
            'Employees',
            'Employees',
            'manage_options',
            'booking-widget-employees',
            array($this, 'render_employees_page')
        );

        add_submenu_page(
            'booking-widget',
            'Settings',
            'Settings',
            'manage_options',
            'booking-widget-settings',
            array($this, 'render_settings_page')
        );
    }

    public function enqueue_admin_scripts($hook) {
        if (strpos($hook, 'booking-widget') === false) {
            return;
        }

        wp_enqueue_script(
            'booking-widget-admin',
            plugins_url('js/admin.js', __FILE__),
            array('jquery'),
            '1.0.0',
            true
        );

        wp_localize_script(
            'booking-widget-admin',
            'bookingWidgetAdmin',
            array(
                'firebase' => array(
                    'apiKey' => get_option('booking_widget_firebase_api_key'),
                    'authDomain' => get_option('booking_widget_firebase_auth_domain'),
                    'projectId' => get_option('booking_widget_firebase_project_id'),
                    'storageBucket' => get_option('booking_widget_firebase_storage_bucket'),
                    'messagingSenderId' => get_option('booking_widget_firebase_messaging_sender_id'),
                    'appId' => get_option('booking_widget_firebase_app_id')
                )
            )
        );
    }

    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>Booking Widget Dashboard</h1>
            <div id="booking-widget-admin-app">
                <!-- React app will mount here -->
            </div>
        </div>
        <?php
    }

    public function render_services_page() {
        ?>
        <div class="wrap">
            <h1>Services Management</h1>
            <div id="booking-widget-services-app">
                <!-- React app will mount here -->
            </div>
        </div>
        <?php
    }

    public function render_employees_page() {
        ?>
        <div class="wrap">
            <h1>Employees Management</h1>
            <div id="booking-widget-employees-app">
                <!-- React app will mount here -->
            </div>
        </div>
        <?php
    }

    public function render_settings_page() {
        if (isset($_POST['save_firebase_settings'])) {
            $this->save_firebase_settings();
        }
        ?>
        <div class="wrap">
            <h1>Firebase Settings</h1>
            <form method="post" action="">
                <table class="form-table">
                    <tr>
                        <th scope="row">Firebase API Key</th>
                        <td>
                            <input type="text" name="firebase_api_key" 
                                value="<?php echo esc_attr(get_option('booking_widget_firebase_api_key')); ?>" 
                                class="regular-text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Auth Domain</th>
                        <td>
                            <input type="text" name="firebase_auth_domain" 
                                value="<?php echo esc_attr(get_option('booking_widget_firebase_auth_domain')); ?>" 
                                class="regular-text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Project ID</th>
                        <td>
                            <input type="text" name="firebase_project_id" 
                                value="<?php echo esc_attr(get_option('booking_widget_firebase_project_id')); ?>" 
                                class="regular-text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Storage Bucket</th>
                        <td>
                            <input type="text" name="firebase_storage_bucket" 
                                value="<?php echo esc_attr(get_option('booking_widget_firebase_storage_bucket')); ?>" 
                                class="regular-text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Messaging Sender ID</th>
                        <td>
                            <input type="text" name="firebase_messaging_sender_id" 
                                value="<?php echo esc_attr(get_option('booking_widget_firebase_messaging_sender_id')); ?>" 
                                class="regular-text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">App ID</th>
                        <td>
                            <input type="text" name="firebase_app_id" 
                                value="<?php echo esc_attr(get_option('booking_widget_firebase_app_id')); ?>" 
                                class="regular-text">
                        </td>
                    </tr>
                </table>
                <?php submit_button('Save Settings', 'primary', 'save_firebase_settings'); ?>
            </form>
        </div>
        <?php
    }

    private function save_firebase_settings() {
        if (!current_user_can('manage_options')) {
            return;
        }

        update_option('booking_widget_firebase_api_key', sanitize_text_field($_POST['firebase_api_key']));
        update_option('booking_widget_firebase_auth_domain', sanitize_text_field($_POST['firebase_auth_domain']));
        update_option('booking_widget_firebase_project_id', sanitize_text_field($_POST['firebase_project_id']));
        update_option('booking_widget_firebase_storage_bucket', sanitize_text_field($_POST['firebase_storage_bucket']));
        update_option('booking_widget_firebase_messaging_sender_id', sanitize_text_field($_POST['firebase_messaging_sender_id']));
        update_option('booking_widget_firebase_app_id', sanitize_text_field($_POST['firebase_app_id']));

        add_settings_error(
            'booking_widget_messages',
            'booking_widget_message',
            'Settings Saved',
            'updated'
        );
    }
}

// Initialize the admin
new BookingWidgetAdmin();
