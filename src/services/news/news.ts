import axios from 'axios';
import { News } from '@/services/news/news-types';

const BASE_URL =
	'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f9007ee97f7e4884b90907b449f19bdc';

export const getNews = async () => {
	const { data } = await axios.get(BASE_URL);
	const { articles, status } = data;

	const news = articles.filter((item: News) => {
		if (item.description !== null && item.urlToImage !== null) {
			return item;
		}
	});

	return { news, status };
};
