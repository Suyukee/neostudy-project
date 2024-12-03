export interface Currency {
	name: string;
	value: number;
}

export type CurrencyName = 'USD' | 'EUR' | 'CNY' | 'JPY' | 'CHF' | 'TRY';

export type DataState<T> = T | null;
export type CurrencyDataState = DataState<Currency[]>;
export type StringDataState = DataState<string>;
