// import Loader from '@/components/loader';
// import LoanStepMessage from '@/components/loan-step-message';
import '@/components/document-section/document-section.scss';

export interface DocumentSectionProps {
	applicationId: number;
}

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
					<h2>Continuation of the application</h2>
					<p>Step 3 of 5</p>
				</div>
			</div>

			<div>Table</div>
		</article>
	);
}
