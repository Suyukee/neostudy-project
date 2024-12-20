import Divider from '@/components/divider';
import '@/components/conditions-section/conditions-section.scss';

const data = [
	{ title: 'Card currency', description: 'Rubles, dollars, euro' },
	{ title: 'Interest free period', description: '0% up to 160 days' },
	{ title: 'Payment system', description: 'Mastercard, Visa' },
	{ title: 'Maximum credit limit on the card', description: '600 000 ₽' },
	{
		title: 'Replenishment and withdrawal',
		description:
			'At any ATM. Top up your credit card for free with cash or transfer from other cards',
	},
	{ title: 'Max cashback per month', description: '15 000 ₽' },
	{
		title: 'Transaction Alert',
		description:
			'60 ₽ — SMS or push notifications\n0 ₽ — card statement, information about transactions in the online bank',
	},
];

export default function ConditionsSection() {
	return (
		<section className="conditions-section">
			<ul className="conditions-section__conditions-list">
				{data.map((condition, index) => (
					<li className="conditions-list__item">
						<div className="item__condition" key={index}>
							<h6 className="condition__title">{condition.title}</h6>
							<p className="condition__description" key={index}>
								{condition.description}
							</p>
						</div>
						{index !== data.length - 1 && <Divider />}
					</li>
				))}
			</ul>
		</section>
	);
}
