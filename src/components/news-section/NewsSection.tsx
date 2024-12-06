import { useEffect, useRef, useState } from 'react';
import { getNews } from '@/services/news/news';
import { NewsDataState } from '@/components/news-section/news-section-types';
import ImageFallback from '@/components/image-fallback';
import ArrowIcon from '@/icons/ArrowIcon';
import '@/components/news-section/news-section.scss';

export default function NewsSection() {
	const sliderRef = useRef<HTMLUListElement>(null);
	const itemRef = useRef<HTMLUListElement>(null);

	const [scrollValue, setScrollValue] = useState(0);
	const [maxScroll, setMaxScroll] = useState(0);

	useEffect(() => {
		if (!sliderRef.current) return;
		setMaxScroll(sliderRef.current.scrollWidth - sliderRef.current.clientWidth);
	}, [sliderRef.current]);

	const handleSlideScroll = (direction: 'left' | 'right') => {
		if (!sliderRef.current) return;

		const slider = sliderRef.current;
		const itemWidth = slider.querySelectorAll('li')[0].clientWidth;
		const slideWidth = slider.clientWidth > 1000 ? 500 : itemWidth + 10;

		if (direction === 'left') {
			slider.scrollLeft = scrollValue - slideWidth;
			setScrollValue(scrollValue - slideWidth);
		}

		if (direction === 'right') {
			slider.scrollLeft = scrollValue + slideWidth;
			setScrollValue(scrollValue + slideWidth);
		}
	};

	const [news, setNews] = useState<NewsDataState>(null);

	useEffect(() => {
		const getState = async () => {
			const { news, status } = await getNews();

			if (status === 'ok') {
				setNews(news);
			}
		};

		getState();
	}, []);

	return (
		<article className="news-section">
			<h2 className="news-section__title">Current news from the world of finance</h2>
			<p className="news-section__description">
				We update the news feed every 15 minutes. You can learn more by clicking on the news you are
				interested in.
			</p>

			{!news && <h2>Error to request news</h2>}

			{news && (
				<section className="slider">
					<ul className="slider__slider-list" ref={sliderRef}>
						{news?.map((item, index) => (
							<li className="slider-list__item" key={index}>
								<a href={item.url} target="_blank">
									<ImageFallback
										src={item.urlToImage}
										fallback="/images/news.png"
										alt="News image"
									/>
									<h4>{item.title}</h4>
									<p>{item.description}</p>
								</a>
							</li>
						))}
					</ul>

					<nav className="slider__navbar">
						<button
							className="navbar__button"
							disabled={scrollValue < 1}
							onClick={() => handleSlideScroll('left')}
						>
							<ArrowIcon direction="left" />
						</button>
						<button
							className="navbar__button"
							disabled={scrollValue >= maxScroll}
							onClick={() => handleSlideScroll('right')}
						>
							<ArrowIcon />
						</button>
					</nav>
				</section>
			)}
		</article>
	);
}
