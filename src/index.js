/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import {__} from "@wordpress/i18n";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('mindd/mindd', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,
	attributes: {
		ApiKey: {type: 'string'},
		accent_color: {type: 'string', default: '#ff00ff'},
		widget_background: {type: 'string', default: '#f0ff00'},
		widget_foreground: {type: 'string', default: '#0000ff'},
		welcome_text: {type: 'string', default: __('**Voordat u belt, doorloop eerst deze vragen.**', 'mindd')},
		// open: false,
		// modalDisplayMode: '',
		// widget_showWelcomeText: false,
		// QuestionWhatGender: false,
		// branding_termsOfUseUrl: '',
		// branding_layout: 'geen idee',
		// branding_name: '',
		// branding_phone_label: '',
		// branding_phone_number: '',

		/**
		 * OLD
		 */
		// bg_color: {type: 'string', default: '#000000'},
		// text_color: {type: 'string', default: '#ffffff'},
		// message: {
		// 	type: 'string',
		// 	source: 'text',
		// 	selector: 'div',
		// 	default: '', // empty default
		// },
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
