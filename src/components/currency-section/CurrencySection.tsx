import { useEffect, useState } from 'react';
import BankIcon from '@/icons/BankIcon';
import { getCurrency } from '@/services/currency/currency';
import { CurrencyDataState } from '@/components/currency-section/currency-section-types';
import { StringDataState } from '@/types/api';
import '@/components/currency-section/currensy-section.scss';

export default function CurrencySection() {
	const [currency, setCurrency] = useState<CurrencyDataState>(null);
	const [timeUpdate, setTimeUpdate] = useState<StringDataState>(null);

	useEffect(() => {
		const getState = async () => {
			const { currency, timeUpdate, result } = await getCurrency(
				'USD',
				'EUR',
				'CNY',
				'JPY',
				'CHF',
				'TRY',
			);

			if (result === 'success') {
				setCurrency(currency);
				setTimeUpdate(timeUpdate);
			}
		};

		getState();
	}, []);

	return (
		<article className="currency">
			<div className="currency__header">
				<h2 className="header__title">Exchange rate in internet bank</h2>
				<span className="header__data">{timeUpdate}</span>
			</div>

			<p className="currency__span">Currency</p>

			<div className="currency__info">
				{currency && (
					<ul className="info__currency-list">
						{currency.map((item, index) => (
							<li key={index} className="currency-list__item">
								{`${item.name}:`}
								<span className="item__span">{item.value}</span>
							</li>
						))}
					</ul>
				)}

				<BankIcon />
			</div>

			<button className="currency__button">All courses</button>
		</article>
	);
}
