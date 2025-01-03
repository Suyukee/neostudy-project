import '@/components/card-section/card-section.scss';
import Tooltip from '@/components/tooltip';

export default function CardSection() {
	return (
		<article className="card-section">
			<h1 className="card-section__title">Platinum digital credit card</h1>

			<div className="card-section__description">
				<p>Our best credit card. Suitable for everyday spending and shopping.</p>
				<p> Cash withdrawals and transfers without commission and interest.</p>
			</div>

			<div className="card-section__card-image">
				<img src="/images/card1.png" alt="Credit card" />
			</div>

			<ul className="card-section__card-list">
				<Tooltip tooltip="When repaying the full debt up to 160 days.">
					<li className="card-list__item">
						<h4>Up to 160 days</h4>
						<p>No percent</p>
					</li>
				</Tooltip>

				<Tooltip tooltip="Over the limit willaccrue percent.">
					<li className="card-list__item">
						<h4>Up to 600 000 ₽</h4>
						<p>Credit limit</p>
					</li>
				</Tooltip>

				<Tooltip tooltip="Promotion valid until December 31, 2022.">
					<li className="card-list__item">
						<h4>0 ₽</h4>
						<p>Card service is free</p>
					</li>
				</Tooltip>
			</ul>

			<div className="card-section__button">
				<button className="button-primary">Apply for card</button>
			</div>
		</article>
	);
}
