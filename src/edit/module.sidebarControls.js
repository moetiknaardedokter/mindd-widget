import {__, sprintf} from '@wordpress/i18n';

import {InspectorControls, PanelColorSettings} from '@wordpress/block-editor';
import {PanelBody, TextControl, BaseControl, TextareaControl, ExternalLink} from "@wordpress/components";

export default function SidebarControls({attributes, setAttributes, setState}) {
	const register_url = 'https://www.moetiknaardedokter.nl/informatie-voor-huisartsen/aanvraag-api-key/';

	return (
		<InspectorControls key="settting">
			<PanelBody title={__('APIKEY', 'mindd')} initialOpen={false}>
				<div className='mindd-controlls-api-key'>
					<TextControl
						label={__('API-key', 'mindd')}
						value={attributes.ApiKey}
						onChange={(ApiKey) => setAttributes({ApiKey})}
						placeholder={__('Required', 'mindd')}
					/>
					<div>
						{__('Om de widget te kunnen gebruiken dient u een geheime sleutel (API-key) in te voeren.', 'mindd')}
						<br/>
						<ExternalLink href={register_url}>{__('Hier kunt u een API-key aanvragen.', 'mindd')}</ExternalLink>
					</div>
				</div>
			</PanelBody>
			{attributes.ApiKey && (
				<>
					<PanelBody title={__('Teksten', 'mindd')} initialOpen={false}>
						<TextareaControl
							label={__('Welkomsttekst', 'mindd')}
							value={attributes.welcome_text}
							onChange={(welcome_text) => setAttributes({welcome_text})}
						/>
						<TextControl
							label={__('Huisartspraktijknaam', 'mindd')}
							value={attributes.branding_name}
							onChange={(branding_name) => setAttributes({branding_name})}
						/>
						<TextControl
							label={__('Telefoonnummer label', 'mindd')}
							value={attributes.branding_phone_label}
							onChange={(branding_phone_label) => setAttributes({branding_phone_label})}
						/>

						{attributes.branding_phone_label && (
							<BaseControl
								id='mindd-controlls-branding_phone_number'
								label={__('Telefoonnummer', 'mindd')}
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
						title={__('Kleuren', 'mindd')}
						initialOpen={false}
						colorSettings={[
							{
								value: attributes.widget_background,
								onChange: (widget_background) => setAttributes({widget_background}),
								label: __('Background', 'mindd'),
							},
							{
								value: attributes.widget_foreground,
								onChange: (widget_foreground) => setAttributes({widget_foreground}),
								label: __('Algemene Text', 'mindd'),
							},
							{
								value: attributes.widget_accent,
								onChange: (widget_accent) => setAttributes({widget_accent}),
								label: __('Accent', 'mindd'),
							}
						]}
					/>

				</>
			)}
		</InspectorControls>
	);
}
