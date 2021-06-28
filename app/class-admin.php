<?php

namespace MINDD\App;

/**
 * Class Admin
 *
 * @package MINDD\app
 */
class Admin {

	/**
	 * Add a settings link to the the plugin on the plugin page
	 *
	 * @param array $links An array of plugin action links.
	 *
	 * @return array
	 */
	public static function settings_link( array $links ): array {
		$href          = admin_url( 'options-general.php?page=mindd-plugin' );
		$settings_link = '<a href="' . $href . '">' . __( 'Settings' ) . '</a>'; // phpcs:ignore WordPress.WP.I18n.MissingArgDomain
		array_unshift( $links, $settings_link );

		return $links;
	}

	/**
	 * Run on activation.
	 *
	 * @param string $plugin Path to the plugin file relative to the plugins directory.
	 * @param bool   $network_wide Whether to enable the plugin for all sites in the network or just the current site. Multisite only. Default false.
	 */
	public static function activate( string $plugin, $network_wide = false ) {
		// do stuff.
	}

	/**
	 * Block init
	 */
	public static function block_init() {
		register_block_type_from_metadata(
			MINDD_DIR,
			array(
				'render_callback' => array( self::class, 'render_block' ),
			)
		);
	}

	/**
	 * Render the block.
	 *
	 * @param array $atts Attributes passed.
	 *
	 * @return string
	 */
	public static function render_block( array $atts = array() ) {
		return self::render( $atts );
	}

	/**
	 * Render the shortcode.
	 *
	 * @param string|array $atts attributes passed on to the shortcode.
	 *
	 * @return false|string
	 */
	public static function render( $atts = array() ) {
		$defaults_attr = array(
			'className'              => 'wp-block-mindd-widget',
			'api_key'                => '',
			'welcome_text'           => __( '**Voordat u belt, doorloop eerst deze vragen.**', 'mindd' ),
			'open'                   => false,
			'modalDisplayMode'       => 'full', // dialog or full.
			'widget_showWelcomeText' => true,
			'widget_background'      => 'transparent',
			'widget_foreground'      => '#fff',
			'widget_accent'          => '#00b2ff',
			'QuestionWhatGender'     => null,
			'branding:termsOfUseUrl' => 'https://www.moetiknaardedokter.nl/gebruiksvoorwaarden/',
			'branding:layout'        => null, // top or null.
			'branding:name'          => '',
			'branding:phone_label'   => '',
			'branding:phone_number'  => '',
		);

		// These keys might be called different in the array we receive.
		$sanitize_keys = array(
			'api_key'                => 'ApiKey',
			'branding:termsOfUseUrl' => 'branding_termsOfUseUrl',
			'branding:layout'        => 'branding_layout',
			'branding:name'          => 'branding_name',
			'branding:phone_label'   => 'branding_phone_label',
			'branding:phone_number'  => 'branding_phone_number',
		);
		foreach ( $sanitize_keys as $sanitize_valid_key => $search_key ) {
			if ( isset( $atts[ $search_key ] ) ) {
				$atts[ $sanitize_valid_key ] = $atts[ $search_key ];
				unset( $atts[ $search_key ] );
			}
		}

		$atts = shortcode_atts( $defaults_attr, $atts, 'mindd' );

		// Check the branding, and display it if set.
		if ( ! empty( $atts['branding:name'] ) || ! empty( $atts['branding:phone_label'] ) || ! empty( $atts['branding:phone_number'] ) ) {
			$atts['branding:layout'] = 'top';
		}

		ob_start();
		require MINDD_APP_DIR . 'template-shortcode.php';

		return ob_get_clean();
	}

	/**
	 * Register shortcode.
	 */
	public static function register_shortcode() {
		add_shortcode( 'mindd', array( self::class, 'render' ) );
	}

}
