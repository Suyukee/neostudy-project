import { LoanStepMessageProps } from './loan-step-message-types';
import '@/components/loan-step-message/loan-step-message.scss';

export default function LoanStepMessage({ title, description }: LoanStepMessageProps) {
	return (
		<article className="loan-step-message-section">
			<div className="loan-step-message-section__loan-step-message">
				<h2 className="loan-step-message__title">{title}</h2>
				<p className="loan-step-message__description">{description}</p>
			</div>
		</article>
	);
}
