import { PrescroingSectionProps } from '@/components/prescroing-section/prescroing-section-types';
import Divider from '@/components/divider';
import PrescoringFormSection from '@/components/prescoring-form-section';
import CardLoanOffersSection from '@/components/card-loan-offers-section';
import '@/components/prescroing-section/prescroing-section.scss';

const stepsDescription = [
	'Fill out an online application - you do not need to visit the bank',
	"Find out the bank's decision immediately after filling out the application",
	'The bank will deliver the card free of charge, wherever convenient, to your city',
];

export default function PrescroingSection({ step, offers }: PrescroingSectionProps) {
	return (
		<article className="prescoring-section">
			<h2 className="prescoring-section__title">How to get a card</h2>

			<ul className="prescoring-section__stepper">
				{stepsDescription.map((item, index) => (
					<li className="stepper__step" key={index}>
						<div className="step__header" key={index}>
							<div className="header__step-count">{index + 1}</div>
							<Divider classes="header__step-divider" color="secondary" />
						</div>

						<p className="step__description">{item}</p>
					</li>
				))}
			</ul>

			<div className="prescoring-section__prescoring">
				{step === 'step-1' && <PrescoringFormSection />}

				{step === 'step-2' && <CardLoanOffersSection offers={offers} />}

				{step === 'step-3' && (
					<div className="prescoring__result-message">
						<h2 className="result-message__title">
							The preliminary decision has been sent to your email.
						</h2>
						<p className="result-message__description">
							In the letter you can get acquainted with the preliminary decision on the credit card.
						</p>
					</div>
				)}
			</div>
		</article>
	);
}
