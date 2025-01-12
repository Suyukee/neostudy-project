import { Link } from 'react-router';
import { LoanStepMessageProps } from './loan-step-message-types';
import '@/components/loan-step-message/loan-step-message.scss';

export default function LoanStepMessage({
	variant = 'default',
	title,
	description,
}: LoanStepMessageProps) {
	return (
		<article className="loan-step-message-section">
			{variant === 'finally' && <img src="/images/surprise.png" alt="" />}

			<div className="loan-step-message-section__loan-step-message">
				<h2 className="loan-step-message__title">{title}</h2>
				<p className="loan-step-message__description">{description}</p>
			</div>

			{variant === 'finally' && (
				<div>
					<Link to="/" className="button-primary">
						View other offers of our bank
					</Link>
				</div>
			)}
		</article>
	);
}
