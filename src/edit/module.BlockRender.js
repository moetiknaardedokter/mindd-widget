import {useBlockProps} from "@wordpress/block-editor";
import {__} from "@wordpress/i18n";

export default function BlockRender({attributes, setAttributes}) {
	return (
		attributes.ApiKey ?
			<div {...useBlockProps()}
				style={{
					backgroundColor: attributes.widget_background,
					color: attributes.widget_foreground,
				}}
			>

				<div className='mindd-header'>
					<div className='mindd-header-branding-name'>branding name</div>
					<div className='mindd-header-branding-phone'>phone_label</div>
				</div>
				<div className='mindd-pre-body'>
					<div className='mindd-pre-body-terms'>termsOfUseUrl</div>
					<div className='mindd-pre-body-welcome'>welcome_text</div>
				</div>
				<div className='mindd-question-card'>
					<div className='mindd-question-title'>{__('Bent u een man of een vrouw?', 'mindd')}</div>
					<div className='mindd-question-gender'>
						<button className='mindd-question-gender-m'>{__('Man', 'mindd')}</button>
						<button className='mindd-question-gender-f'>{__('Vrouw', 'mindd')}</button>
					</div>
				</div>
				<div className='mindd-question-card'>
					<div className='mindd-question-title'>{__('Wat is uw geboortedatum?', 'mindd')}</div>
					<div className='mindd-question-birthday'>
						<div className='mindd-question-birthday-day'>{__('dd', 'mindd')}</div>
						<div className='mindd-question-birthday-month'>{__('mm', 'mindd')}</div>
						<div className='mindd-question-birthday-year'>{__('yyyy', 'mindd')}</div>
					</div>
					<div className='mindd-question-submit'>
						<button>{__('Bevestigen', 'mindd')}</button>
					</div>
				</div>


			</div>
			:
			// If API key is not set, probably a overlay is better.
			<div {...useBlockProps()} >
				<div>TODO uitleg tekstje voor het krijgen van een API key</div>
			</div>

	)
}
