import { StateWithNull } from '@/types/api';

export interface Currency {
	name: string;
	value: number;
}

export type CurrencyStateWithNull = StateWithNull<Currency[]>;
