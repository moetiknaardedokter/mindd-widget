
import {registerBlockType} from '@wordpress/blocks';
import { Icon } from '@wordpress/components';
import {__} from "@wordpress/i18n";

import minddIcon from './icon';
import Edit from './edit';
import save from './save';

import './style.scss';

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
	icon: <Icon icon={ minddIcon } />,
	attributes: {
		ApiKey: {type: 'string'},
		widget_accent: {type: 'string', default: '#00b2ff' }, // a color.
		widget_background: {type: 'string' }, // a color.
		widget_foreground: {type: 'string' }, // a color.
		welcome_text: {type: 'string', default: __('Voordat u belt, doorloop eerst deze vragen.', 'mindd')},
		// open: false,
		// modalDisplayMode: '',
		// widget_showWelcomeText: false,
		// branding_layout: 'geen idee',
		branding_termsOfUseUrl:  {type: 'string', default: ''},
		branding_name: {type: 'string', default: __('Praktijk naam',  'mindd')},
		branding_phone_label: {type: 'string', default: __('Telefoonnummer',  'mindd')},
		branding_phone_number: {type: 'string', default: ''},

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
