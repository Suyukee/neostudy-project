import { DataState } from '@/types/api';

export interface News {
	title: string;
	description: string;
	urlToImage: string;
}

export type NewsDataState = DataState<News[]>;
