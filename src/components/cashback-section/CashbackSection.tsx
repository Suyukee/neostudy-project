import '@/components/cashback-section/cashback-section.scss';

const data = [
	{
		description: 'For food delivery, cafes and restaurants',
		value: '5%',
	},
	{
		description: 'In supermarkets with our subscription',
		value: '5%',
	},
	{
		description: "In clothing stores and children's goods",
		value: '2%',
	},
	{
		description: 'Other purchases and payment of services and fines',
		value: '1%',
	},
	{
		description: 'Shopping in online stores',
		value: 'up to 3%',
	},
	{
		description: 'Purchases from our partners',
		value: '30%',
	},
];

export default function CashbackSection() {
	return (
		<section className="cashback-section">
			<ul className="cashback-section__cashback-list">
				{data.map((item, index) => (
					<li
						className={`cashback-list__item ${index % 2 === 0 ? 'primary' : 'secondary'}`}
						key={index}
					>
						<p>{item.description}</p>
						<h3>{item.value}</h3>
					</li>
				))}
			</ul>
		</section>
	);
}
