import { DataState } from '@/types/api';
import { News } from '@/services/news/news-types';

export type NewsDataState = DataState<News[]>;
