import ListMarkIcon from '@/icons/ListMarkIcon';
import WorkManIcon from '@/icons/WorkManIcon';
import '@/components/features-section/features-section.scss';

export default function FeaturesSection() {
	return (
		<article className="features-section">
			<WorkManIcon />
			<section className="features">
				<h2 className="features__title">We Provide Many Features You Can Use</h2>

				<p className="features__description">
					You can explore the features that we provide with fun and have their own functions each
					feature
				</p>

				<ul className="features__list">
					<li className="list__item">
						<ListMarkIcon />
						<span>Powerfull online protection</span>
					</li>
					<li className="list__item">
						<ListMarkIcon />
						<span>Cashback without borders</span>
					</li>
					<li className="list__item">
						<ListMarkIcon />
						<span>Personal design</span>
					</li>
					<li className="list__item">
						<ListMarkIcon />
						<span>Work anywhere in the world</span>
					</li>
				</ul>
			</section>
		</article>
	);
}
