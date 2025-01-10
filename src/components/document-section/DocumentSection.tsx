import { DocumentSectionProps } from '@/components/document-section/document-section-types';
import DocumentTable from '@/components/document-table';
// import LoanStepMessage from '@/components/loan-step-message';
// import Loader from '@/components/loader';
import '@/components/document-section/document-section.scss';

export default function DocumentSection({ applicationId }: DocumentSectionProps) {
	// if (isLoading) return <Loader />;

	// if (isSuccess)
	// 	return (
	// 		<LoanStepMessage
	// 			title="Wait for a decision on the application"
	// 			description="The answer will come to your mail within 10 minutes"
	// 		/>
	// 	);

	return (
		<article className="document-section">
			<div className="document-section__title">
				<div className="title__document-text">
					<h2>Payment Schedule</h2>
					<p>Step 3 of 5</p>
				</div>
			</div>

			<DocumentTable applicationId={applicationId} />

			<div className="document-section__footer"></div>
		</article>
	);
}
