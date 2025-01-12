import { useForm } from 'react-hook-form';
import { useSignDocumentMutation } from '@/services/document/document';
import {
	DocumentData,
	DocumentSignSectionProps,
} from '@/components/document-sign-section/document-sign-section-types';
import DocumentFileIcon from '@/icons/DocumentFileIcon';
import Form from '@/components/form';
import FormElementCheckbox from '@/components/form-element-checkbox';
import FormElementLabel from '@/components/form-element-label';
import Loader from '../loader';
import LoanStepMessage from '../loan-step-message';
import '@/components/document-sign-section/document-sign-section.scss';

export default function DocumentSignSection({ applicationId }: DocumentSignSectionProps) {
	const methods = useForm<DocumentData>({
		mode: 'onChange',
		defaultValues: {
			isAgree: false,
		},
	});

	methods.watch('isAgree');
	const isAgree = methods.getValues().isAgree;

	const [signDocument, { isLoading, isSuccess }] = useSignDocumentMutation();

	const handleSubmit = async () => {
		await signDocument(applicationId).catch((error) => console.error(error));
	};

	if (isLoading) return <Loader />;

	if (isSuccess)
		return (
			<LoanStepMessage
				title="Documents have been successfully signed and sent for approval"
				description="Within 10 minutes you will be sent a PIN code to your email for confirmation"
			/>
		);

	return (
		<article className="document-sign-section">
			<div className="document-sign-section__title">
				<div className="title__document-sign-text">
					<h2>Signing of documents</h2>
					<p>Step 4 of 5</p>
				</div>
			</div>

			<div className="document-sign-section__content">
				<p className="content__text">
					Information on interest rates under bank deposit agreements with individuals. Center for
					Corporate Information Disclosure. Information of a professional participant in the
					securities market. Information about persons under whose control or significant influence
					the Partner Banks are. By leaving an application, you agree to the processing of personal
					data, obtaining information, obtaining access to a credit history, using an analogue of a
					handwritten signature, an offer, a policy regarding the processing of personal data, a
					form of consent to the processing of personal data.
				</p>
				<a className="content__file" href="/files/credit-card-offer.pdf">
					<DocumentFileIcon />
					Information on your card
				</a>
			</div>

			<Form
				classes="document-sign-section__control"
				contextMethods={methods}
				onSubmit={handleSubmit}
			>
				<div className="control__checkbox">
					<FormElementCheckbox name="isAgree" id="isAgree" />
					<FormElementLabel forId="isAgree">I agree</FormElementLabel>
				</div>
				<button className="button-primary" type="submit" disabled={!isAgree}>
					Send
				</button>
			</Form>
		</article>
	);
}
