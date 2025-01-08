import { useContext } from 'react';
import { TableContext } from '@/components/table/TableContext';
import {
	TableBodyProps,
	TableCellProps,
	TableHeaderProps,
	TableProps,
	TableRowProps,
	UseContextTableType,
} from '@/components/table/table-types';
import '@/components/table/table.scss';

export function Table({ classes, children }: TableProps) {
	return (
		<TableContext.Provider value={{ variant: 'table' }}>
			<table className={`table ${classes}`}>{children}</table>
		</TableContext.Provider>
	);
}

export function TableHeader({ classes, children }: TableHeaderProps) {
	return (
		<TableContext.Provider value={{ variant: 'header' }}>
			<thead className={`table-header ${classes}`}>{children}</thead>
		</TableContext.Provider>
	);
}

export function TableBody({ classes, children }: TableBodyProps) {
	return (
		<TableContext.Provider value={{ variant: 'body' }}>
			<tbody className={`table-body ${classes}`}>{children}</tbody>
		</TableContext.Provider>
	);
}

export function TableRow({ classes, children }: TableRowProps) {
	return <tr className={`table-row ${classes}`}>{children}</tr>;
}

export function TableCell({ classes, children }: TableCellProps) {
	const { variant }: UseContextTableType = useContext(TableContext);

	const Component = variant === 'header' ? 'th' : 'td';

	return <Component className={`table-cell ${classes}`}>{children}</Component>;
}
