<?php
/**
 * Plugin Name:       Moet ik naar de dokter? – zelftriage widget
 * Plugin URI:        https://moetiknaardedokter.azurewebsites.net/
 * Description:       Plaats de zelftriage widget van 'Moet ik naar de dokter?' op uw eigen website.
 * Author:            MINDD B.V.
 * Text Domain:       mindd
 * Domain Path:       /languages
 * Requires at least: 5.0
 * Requires PHP:      7.1
 * Version:           1.1.1
 *
 * @package         Mindd
 */

namespace MINDD;

use MINDD\App\WP_GitHub_Updater;

//phpcs:disable PEAR.Functions

define( 'MINDD_VERSION', '1.1.1' );
define( 'MINDD_DIR', plugin_dir_path( __FILE__ ) );
define( 'MINDD_APP_DIR', MINDD_DIR . 'app' . DIRECTORY_SEPARATOR );
define( 'MINDD_URL', plugin_dir_url( __FILE__ ) );
define( 'MINDD_NAME', basename( __DIR__ ) . DIRECTORY_SEPARATOR . basename( __FILE__ ) );

/**
 * Autoload classes.
 */
spl_autoload_register( function ( $class_name ) {
	if ( strpos( $class_name, __NAMESPACE__ . '\App' ) !== 0 ) {
		return; // Not in the plugin namespace, don't check.
	}
	$bare_class = str_replace( __NAMESPACE__ . '\App\\', '', $class_name );
	$bare_class = str_replace( '_', '-', $bare_class );

	require_once MINDD_APP_DIR . 'class-' . strtolower( $bare_class ) . '.php';
} );

add_action( 'plugins_loaded', function () {
	$ds                 = DIRECTORY_SEPARATOR;
	$updater_class_file = MINDD_DIR . $ds . 'vendor' . $ds . 'radishconcepts' . $ds . 'wordpress-github-plugin-updater' . $ds . 'updater.php';

	if ( ! is_admin() ) {
		return; // Only configure on admin pages.
	}

	$config = array(
		'slug'               => plugin_basename( __FILE__ ),
		'proper_folder_name' => 'mindd-widget',
		'api_url'            => 'https://api.github.com/repos/webfundament/mindd-widget',
		'raw_url'            => 'https://raw.github.com/webfundament/mindd-widget/main',
		'github_url'         => 'https://github.com/webfundament/mindd-widget',
		'zip_url'            => 'https://github.com/webfundament/mindd-widget/raw/main/mindd-widget.zip',
		'sslverify'          => true,
		'requires'           => '5.0',
		'tested'             => '5.7.2',
		'readme'             => 'README.md',
		'access_token'       => '',
	);

	new WP_GitHub_Updater( $config );
} );

/**
 * Hook everything.
 */

// Plugin activation.
register_activation_hook( __FILE__, array( '\MINDD\App\Admin', 'activate' ) );

// Adds a link to the settings page on the plugin overview.
// add_filter( 'plugin_action_links_' . MINDD_NAME, array( '\MINDD\App\Admin', 'settings_link' ) );

// add the rest of the hooks & filters.
add_action( 'init', array( '\MINDD\App\Admin', 'block_init' ) );
add_action( 'init', array( '\MINDD\App\Admin', 'register_shortcode' ) );
