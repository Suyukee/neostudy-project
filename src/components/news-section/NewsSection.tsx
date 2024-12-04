import { useEffect, useRef, useState } from 'react';
import { getNews } from '@/services/news/news';
import { NewsDataState } from '@/components/news-section/news-section.types';
import ArrowIcon from '@/icons/ArrowIcon';
import '@/components/news-section/news-section.scss';

export default function NewsSection() {
	const sliderRef = useRef<HTMLUListElement>(null);

	const [news, setNews] = useState<NewsDataState>(null);

	useEffect(() => {
		const getState = async () => {
			const { news, status } = await getNews();

			if (status === 'ok') {
				setNews(news);
				console.log(news);
			}
		};

		getState();
	}, []);

	const handleClickLeft = () => {
		if (!sliderRef.current) return;

		const slider = sliderRef.current;
		const slideWidth = slider.clientWidth;

		slider.scrollLeft = slider.scrollLeft - slideWidth;
	};

	const handleClickRight = () => {
		if (!sliderRef.current) return;

		const slider = sliderRef.current;
		const slideWidth = slider.clientWidth;

		slider.scrollLeft = slider.scrollLeft + slideWidth;
	};

	return (
		<article className="news-section">
			<h2 className="news-section__title">Current news from the world of finance</h2>
			<p className="news-section__description">
				We update the news feed every 15 minutes. You can learn more by clicking on the news you are
				interested in.
			</p>

			<section className="slider">
				<ul className="slider__list" ref={sliderRef}>
					{news?.map((item, index) => (
						<li className="list__item" key={index}>
							<img src={item.urlToImage} alt="News image" />
							<h4>{item.title}</h4>
							<p>{item.description || '—'}</p>
						</li>
					))}
				</ul>

				<nav className="slider__navbar">
					<button className="navbar__button" onClick={handleClickLeft}>
						<ArrowIcon direction="left" />
					</button>
					<button className="navbar__button" onClick={handleClickRight}>
						<ArrowIcon />
					</button>
				</nav>
			</section>
		</article>
	);
}
