import { createContext } from 'react';
import { TableProviderProps } from '@/components/table/table-types';

export const TableContext = createContext({});

export default function TableProvider({ children, variant = 'table' }: TableProviderProps) {
	return <TableContext.Provider value={{ variant }}>{children}</TableContext.Provider>;
}
