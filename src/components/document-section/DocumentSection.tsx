import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { setApplicationStepAction } from '@/redux/application/application-actions';
import { useCreateDocumentMutation } from '@/services/document/document';
import {
	DocumentData,
	DocumentSectionProps,
} from '@/components/document-section/document-section-types';
import DocumentTable from '@/components/document-table';
import Form from '@/components/form';
import FormElementCheckbox from '@/components/form-element-checkbox';
import FormElementLabel from '@/components/form-element-label';
import Modal from '@/components/modal';
import Loader from '@/components/loader';
import LoanStepMessage from '@/components/loan-step-message';
import '@/components/document-section/document-section.scss';

export default function DocumentSection({ applicationId }: DocumentSectionProps) {
	const [denyModalIsOpen, setDenyModalIsOpen] = useState(false);
	const [goHomeModalIsOpen, setGoHomeModalIsOpen] = useState(false);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleDenyModal = () => {
		setDenyModalIsOpen(true);
	};

	const handleDenyCloseModal = () => {
		setDenyModalIsOpen(false);
	};

	const hadleGoHomeModal = () => {
		handleDenyCloseModal();
		setGoHomeModalIsOpen(true);
	};

	const handleGoHomeCloseModal = () => {
		setGoHomeModalIsOpen(false);
		navigate('/');
	};

	const methods = useForm<DocumentData>({
		mode: 'onChange',
		defaultValues: {
			isAgree: false,
		},
	});

	methods.watch('isAgree');
	const isAgree = methods.getValues().isAgree;

	const [createDocument, { isLoading, isSuccess }] = useCreateDocumentMutation();

	const handleSubmit = async () => {
		await createDocument(applicationId).catch((error) => console.error(error));

		dispatch(setApplicationStepAction(3));
	};

	if (isLoading) return <Loader />;

	if (isSuccess)
		return (
			<LoanStepMessage
				title="Documents are formed"
				description="Documents for signing will be sent to your email"
			/>
		);

	return (
		<article className="document-section">
			<div className="document-section__title">
				<div className="title__document-text">
					<h2>Payment Schedule</h2>
					<p>Step 3 of 5</p>
				</div>
			</div>

			<DocumentTable applicationId={applicationId} />

			<Form classes="document-section__control" contextMethods={methods} onSubmit={handleSubmit}>
				<div className="control__deny">
					<button className="deny__button" onClick={handleDenyModal}>
						Deny
					</button>
				</div>

				<div className="control__agree">
					<div className="agree__checkbox">
						<FormElementCheckbox name="isAgree" id="isAgree" />
						<FormElementLabel forId="isAgree">I agree with the payment schedule</FormElementLabel>
					</div>
					<button className="button-primary" type="submit" disabled={!isAgree}>
						Send
					</button>
				</div>
			</Form>

			<Modal title="Deny application" isOpen={denyModalIsOpen} onClose={handleDenyCloseModal}>
				<div className="control__modal">
					<p className="modal__text">You exactly sure, you want to cancel this application?</p>
					<div className="modal__modal-control">
						<button className="deny__button" onClick={hadleGoHomeModal}>
							Deny
						</button>
						<button className="button-primary" onClick={handleDenyCloseModal}>
							Cancel
						</button>
					</div>
				</div>
			</Modal>

			<Modal title="Deny application" isOpen={goHomeModalIsOpen} onClose={handleGoHomeCloseModal}>
				<div className="control__modal">
					<p className="modal__text">Your application has been deny!</p>
					<div className="modal__modal-control">
						<button className="button-primary" onClick={handleGoHomeCloseModal}>
							Go home
						</button>
					</div>
				</div>
			</Modal>
		</article>
	);
}
