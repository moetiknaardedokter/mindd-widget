import {__} from '@wordpress/i18n';

import {InspectorControls, PanelColorSettings,} from '@wordpress/block-editor';
import {PanelBody, TextControl} from "@wordpress/components";

export default function SidebarControls({attributes, setAttributes}) {
	return (
		<InspectorControls key="settting">
			<PanelBody title={__('APIKEY', 'mindd')} initialOpen={false}>
				<div className='mindd-controlls-api-key'>
					<TextControl
						label={__('API key', 'mindd')}
						value={attributes.ApiKey}
						onChange={(ApiKey) => setAttributes({ApiKey})}
						placeholder={__('Required', 'mindd')}
					/>
					<div>TODO uitleg tekstje voor het krijgen van een API key</div>
				</div>
			</PanelBody>
			{attributes.ApiKey &&  (
				<PanelColorSettings // Element Tag for Gutenberg standard colour selector
					title={__('Colors', 'mindd')}
					initialOpen={false}
					colorSettings={[
						{
							value: attributes.accent_color,
							onChange: (accent_color) => setAttributes({accent_color}),
							label: __('Accent', 'mindd'),
						},
						{
							value: attributes.widget_background,
							onChange: (widget_background) => setAttributes({widget_background}),
							label: __('Background', 'mindd'),
						},
						{
							value: attributes.widget_foreground,
							onChange: (widget_foreground) => setAttributes({widget_foreground}),
							label: __('Text', 'mindd'),
						}
					]}
				/>
			)}
		</InspectorControls>
	);
}
