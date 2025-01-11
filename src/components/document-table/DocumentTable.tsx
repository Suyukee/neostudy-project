import { useState } from 'react';
import { useGetApplicationByIdQuery } from '@/services/application/application';
import { ApiPaymentData } from '@/services/application/application-types';
import {
	DocumentTableProps,
	Header,
	Order,
} from '@/components/document-table/document-table-types';
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
	TableSortLabel,
} from '@/components/table/Table';
import Loader from '@/components/loader';
import '@/components/document-table/document-table.scss';

export default function DocumentTable({ applicationId }: DocumentTableProps) {
	const { data: paymentData, isLoading: paymentIsLoading } =
		useGetApplicationByIdQuery(applicationId);

	const [order, setOrder] = useState<Order>('asc');
	const [orderBy, setOrderBy] = useState<keyof ApiPaymentData>('number');

	if (!paymentData) return;

	const headers: Header[] = [
		{ id: 'number', label: 'number' },
		{ id: 'date', label: 'date' },
		{ id: 'totalPayment', label: 'total payment' },
		{ id: 'interestPayment', label: 'interest payment' },
		{ id: 'debtPayment', label: 'debt payment' },
		{ id: 'remainingDebt', label: 'remaining debt' },
	];
	const rows = paymentData?.credit.paymentSchedule;

	const handleClickHeader = (colHeader: keyof ApiPaymentData) => {
		const isDesc = colHeader === orderBy && order === 'desc';

		setOrder(isDesc ? 'asc' : 'desc');
		setOrderBy(colHeader);
	};

	const getSortedData = (data: ApiPaymentData[]) => {
		const sortData = [...data];

		if (order === 'asc') {
			return sortData.sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));
		}
		return sortData.sort((a, b) => (a[orderBy] > b[orderBy] ? -1 : 1));
	};

	if (paymentIsLoading) return <Loader />;

	return (
		<Table classes="document-table">
			<TableHeader>
				<TableRow>
					{headers.map((header, index) => (
						<TableCell key={index}>
							<TableSortLabel
								direction={header.id === orderBy ? order : 'asc'}
								onClick={() => handleClickHeader(header.id)}
							>
								{header.label}
							</TableSortLabel>
						</TableCell>
					))}
				</TableRow>
			</TableHeader>

			<TableBody>
				{getSortedData(rows)?.map((row) => (
					<TableRow key={row.number}>
						<TableCell>{row.number}</TableCell>
						<TableCell>{row.date}</TableCell>
						<TableCell>{row.totalPayment}</TableCell>
						<TableCell>{row.interestPayment}</TableCell>
						<TableCell>{row.debtPayment}</TableCell>
						<TableCell>{row.remainingDebt}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
