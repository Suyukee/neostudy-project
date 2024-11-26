import WorldMapIcon from '@/icons/WorldMapIcon';
import '@/components/world-map-section/world-map-section.scss';

export default function WorldMapSection() {
	return (
		<article className="worldmap">
			<h2 className="worldmap__title">You can use our services anywhere in the world</h2>
			<p className="worldmap__description">
				Withdraw and transfer money online through our application
			</p>
			<WorldMapIcon />
		</article>
	);
}
