import { ReactNode } from 'react';

export interface TableProviderProps {
	children: ReactNode;
	variant: 'table' | 'header' | 'body';
}

export interface TableProps {
	classes?: string;
	children: ReactNode | ReactNode[];
}

export interface TableHeaderProps {
	classes?: string;
	children: ReactNode | ReactNode[];
}

export interface TableBodyProps {
	classes?: string;
	children: ReactNode | ReactNode[];
}

export interface TableRowProps {
	classes?: string;
	children: ReactNode | ReactNode[];
}

export interface TableCellProps {
	classes?: string;
	children: ReactNode | ReactNode[];
}

export interface UseContextTableType {
	variant?: 'table' | 'header' | 'body';
}
