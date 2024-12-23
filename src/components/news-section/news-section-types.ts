import { StateWithNull } from '@/types/api';
import { News } from '@/services/news/news-types';

export type NewsStateWithNull = StateWithNull<News[]>;
