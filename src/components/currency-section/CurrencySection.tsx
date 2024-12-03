import BankIcon from '@/icons/BankIcon';
import '@/components/currency-section/currensy-section.scss';

const currency = [
	{ currencyName: 'USD', value: 60.78 },
	{ currencyName: 'SNY', value: 9.08 },
	{ currencyName: 'CNF', value: 64.78 },
	{ currencyName: 'USD', value: 60.78 },
	{ currencyName: 'JPY', value: 0.46 },
	{ currencyName: 'TRY', value: 3.39 },
];

export default function CurrencySection() {
	return (
		<article className="currency">
			<div className="currency__header">
				<h2 className="header__title">Exchange rate in internet bank</h2>
				<span className="header__data">Update every 15 minutes, MSC 09.08.2022</span>
			</div>

			<p className="currency__span">Currency</p>

			<div className="currency__info">
				<ul className="info__currency-list">
					{currency.map((item, index) => (
						<li key={index} className="currency-list__item">
							{`${item.currencyName}:`}
							<span className="item__span">{item.value}</span>
						</li>
					))}
				</ul>

				<BankIcon />
			</div>

			<button className="currency__button">All courses</button>
		</article>
	);
}
