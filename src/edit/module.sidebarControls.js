import {__} from '@wordpress/i18n';

import {InspectorControls, PanelColorSettings} from '@wordpress/block-editor';
import {PanelBody, TextControl, BaseControl, TextareaControl, ToggleControl} from "@wordpress/components";

export default function SidebarControls({attributes, setAttributes, setState}) {
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
					<div>{__('TODO uitleg tekstje voor het krijgen van een API key', 'mindd')}</div>
				</div>
			</PanelBody>
			{attributes.ApiKey && (
				<>
					<PanelBody title={__('Texts', 'mindd')} initialOpen={false}>
						<TextareaControl
							label={__('welcome_text', 'mindd')}
							value={attributes.welcome_text}
							onChange={(welcome_text) => setAttributes({welcome_text})}
						/>
						<TextControl
							label={__('branding_name', 'mindd')}
							value={attributes.branding_name}
							onChange={(branding_name) => setAttributes({branding_name})}
						/>
						<TextControl
							label={__('branding_phone_label', 'mindd')}
							value={attributes.branding_phone_label}
							onChange={(branding_phone_label) => setAttributes({branding_phone_label})}
						/>

						{attributes.branding_phone_label && (
							<BaseControl
								id='mindd-controlls-branding_phone_number'
								label={__('branding_phone_number', 'mindd')}
							>
								<input
									type='tel'
									value={attributes.branding_phone_number}
									onChange={(event) => {
										setAttributes({branding_phone_number: event.target.value});
									}}
									placeholder={__('0031123456790', 'mindd')}
								/>
							</BaseControl>
						)}
					</PanelBody>
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

				</>
			)}
		</InspectorControls>
	);
}
