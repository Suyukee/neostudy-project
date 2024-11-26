import '@/components/card-section/card-section.scss';

export default function CardsSection() {
	return (
		<article className="card-section">
			<section className="card-section__title">
				<h1 className="title__text">Choose the design you like and apply for card right now</h1>
				<div>
					<button className="title__button">Choose the card</button>
				</div>
			</section>

			<ul className="card-list">
				<li>
					<img src="/images/card1.png" alt="Credit card" />
				</li>
				<li>
					<img src="/images/card2.png" alt="Credit card" />
				</li>
				<li>
					<img src="/images/card3.png" alt="Credit card" />
				</li>
				<li>
					<img src="/images/card4.png" alt="Credit card" />
				</li>
			</ul>
		</article>
	);
}
