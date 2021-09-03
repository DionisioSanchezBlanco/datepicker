# datepicker
Datepicker for WordPress CF7

## Form example
Form created with CF7 and CF7 conditional fields. Fields are changed when you select a specific restaurant. The emails are sent to three different email accounts, depend of the restaurant selection.

## disable_dates.js
Script to enable only days from tomorrow and to disable Wednesday for two of the restaurants.

## checkin_checkout.js
Script to manage two datepickers:
- checkin: The starting date is tomorrow to avoid booking in the current day (today).
- checkout: The starting date is one day after checkin date selected.

## functions.php
/* Custom script with no dependencies, enqueued in the header */

add_action('wp_enqueue_scripts', 'tutsplus_enqueue_custom_js');
function tutsplus_enqueue_custom_js() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('disable_dates', get_stylesheet_directory_uri().'/js/disable_dates.js', array('jquery', 'jquery-ui-datepicker'), '1.0', true );
}

## Adding styles to datepicker
/* Custom script with no dependencies, enqueued in the header */

add_action('wp_enqueue_scripts', 'tutsplus_enqueue_custom_js');
function tutsplus_enqueue_custom_js() {
	wp_enqueue_style('disable_dates', '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css');
    wp_enqueue_script('jquery');
    wp_enqueue_script('disable_dates', get_stylesheet_directory_uri().'/assets/js/disable_dates.js', array('jquery', 'jquery-ui-datepicker'), '1.0', true );
}
