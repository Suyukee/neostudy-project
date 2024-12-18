import MoneyDuotoneIcon from '@/icons/MoneyDuotoneIcon';
import CalendarDuotoneIcon from '@/icons/CalendarDuotoneIcon';
import ClockDuotoneIcon from '@/icons/ClockDuotoneIcon';
import BagDuotoneIcon from '@/icons/BagDuotoneIcon';
import CardDuotoneIcon from '@/icons/CardDuotoneIcon';
import '@/components/about-card-section/about-card-section.scss';

export default function AboutCardSection() {
	const data = [
		{
			icon: <MoneyDuotoneIcon />,
			title: 'Up to 50 000 ₽',
			text: 'Cash and transfers without commission and percent',
			color: 'primary',
		},
		{
			icon: <CalendarDuotoneIcon />,
			title: 'Up to 160 days',
			text: 'Without percent on the loan',
			color: 'secondary',
		},
		{
			icon: <ClockDuotoneIcon />,
			title: 'Free delivery',
			text: 'We will deliver your card by courier at a convenient place and time for you',
			color: 'primary',
		},
		{
			icon: <BagDuotoneIcon />,
			title: 'Up to 12 months',
			text: 'No percent. For equipment, clothes and other purchases in installments',
			color: 'secondary',
		},
		{
			icon: <CardDuotoneIcon />,
			title: 'Convenient deposit and withdrawal',
			text: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
			color: 'primary',
		},
	];

	return (
		<section className="about-card-section">
			<ul className="about-card-section__about-card-list">
				{data.map((item, index) => (
					<li className={`about-card-list__item ${item.color}`} key={index}>
						{item.icon}
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
