import { ApiPaymentData } from '@/services/application/application-types';

export interface DocumentTableProps {
	applicationId: number;
}

export interface Header {
	id: keyof ApiPaymentData;
	label: string;
}

export interface SortState {
	col: keyof ApiPaymentData;
	direction: Order;
}

export type Order = 'asc' | 'desc';
