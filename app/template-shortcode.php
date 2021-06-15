<?php
/**
 * Rendering the Self Triage widget.
 *
 * @package MINDD\app
 * @var $atts array holds the attributes.
 *
 * phpcs:disable WordPress.WP.EnqueuedResources.NonEnqueuedScript
 * phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
 */

// Format variables for JS injection.
if ( is_null( $atts['QuestionWhatGender'] ) ) {
	$atts['QuestionWhatGender'] = 'null';
}
if ( ! $atts['open'] ) {
	$atts['open'] = 'false';
} else {
	$atts['open'] = 'true';
}
if ( ! $atts['widget_showWelcomeText'] ) {
	$atts['widget_showWelcomeText'] = 'false';
} else {
	$atts['widget_showWelcomeText'] = 'true';
}
if ( is_null( $atts['branding:layout'] ) ) {
	$atts['branding:layout'] = 'null';
} else {
	$atts['branding:layout'] = "'{$atts['branding:layout']}'";
}

$class_selector = implode( ',', explode( ' ', $atts['className'] ) );

/**
 * Start template
 */
if ( empty( $atts['api_key'] ) ) :
	?>
	<div class="<?php echo esc_attr( $atts['className'] ); ?> no-api-key">
		<h2><?php esc_html_e( 'Missing API key', 'mindd' ); ?></h2>
		<div class="message"><?php esc_html_e( 'Er is geen API-key opgegeven. De widget heeft een API-Key nodig.', 'mindd' ); ?></div>
	</div>
	<?php
	return;
endif;
?>
<div class="<?php echo esc_attr( $atts['className'] ); ?>">
	<style>
		[data-minddclass="modal"],
		.<?php echo esc_attr( $class_selector ); ?> {
			--mindd-button-accent: <?php echo esc_attr( $atts['widget_accent'] ); ?>
		}
	</style>
	<div id="mindd_widget_embedded" style="height:300px;"></div>
	<script src="https://moetiknaardedokter.azurewebsites.net/embed/index.js" type="text/javascript"></script>
	<script type="text/javascript">
		window.addEventListener('DOMContentLoaded', function () {
			window.mindd.init({
				ApiKey: '<?php echo esc_js( $atts['api_key'] ); ?>',
				target: '#mindd_widget_embedded',
				type: 'widget',
				welcome_text: '<?php echo esc_js( $atts['welcome_text'] ); ?>',
				open: <?php echo esc_js( $atts['open'] ); ?>,
				modalDisplayMode: '<?php echo esc_js( $atts['modalDisplayMode'] ); ?>',
				widget_showWelcomeText: <?php echo esc_js( $atts['widget_showWelcomeText'] ); ?>,
				widget_background: '<?php echo esc_js( $atts['widget_background'] ); ?>',
				widget_foreground: '<?php echo esc_js( $atts['widget_foreground'] ); ?>',
				labels: {
					QuestionWhatGender: <?php echo esc_js( $atts['QuestionWhatGender'] ); ?>
				},
				branding: {
					termsOfUseUrl: '<?php echo esc_js( $atts['branding:termsOfUseUrl'] ); ?>',
					layout: <?php echo ( $atts['branding:layout'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>,
					name: '<?php echo esc_js( $atts['branding:name'] ); ?>',
					phone_label: '<?php echo esc_js( $atts['branding:phone_label'] ); ?>',
					phone_number: '<?php echo esc_js( $atts['branding:phone_number'] ); ?>',
				}
			});
		});
	</script>
</div>
