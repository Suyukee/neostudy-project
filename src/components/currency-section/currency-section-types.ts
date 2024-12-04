import { DataState } from '@/types/api';

export interface Currency {
	name: string;
	value: number;
}

export type CurrencyDataState = DataState<Currency[]>;
