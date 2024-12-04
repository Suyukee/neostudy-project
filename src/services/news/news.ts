import axios from 'axios';

const BASE_URL =
	'https://newsapi.org/v2/top-headlines?country=us&apiKey=f9007ee97f7e4884b90907b449f19bdc';

export const getNews = async () => {
	const { data } = await axios.get(BASE_URL);
	const { articles, status } = data;

	return { news: articles, status };
};
