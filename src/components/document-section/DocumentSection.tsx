// import Loader from '@/components/loader';
// import LoanStepMessage from '@/components/loan-step-message';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table/Table';
import '@/components/document-section/document-section.scss';

export interface DocumentSectionProps {
	applicationId: number;
}

const createData = (
	date: string,
	totalPayment: number,
	interestPayment: number,
	debtPayment: number,
	remainingDebt: number,
) => ({
	date,
	totalPayment,
	interestPayment,
	debtPayment,
	remainingDebt,
});

const rows = [
	createData('19-08-2022', 0, 0, 0, 230500),
	createData('19-09-2022', 10215.89, 1152.5, 9063.39, 221436.61),
	createData('19-10-2022', 10215.89, 1107.19, 9108.7, 212327.91),
	createData('19-11-2022', 10215.89, 1061.64, 9154.25, 203173.66),
	createData('19-12-2022', 10215.89, 1015.87, 9200.02, 193973.64),
	createData('19-01-2023', 10215.89, 969.87, 9246.02, 184727.62),
	createData('19-02-2023', 10215.89, 923.64, 9292.25, 175435.37),
];

export default function DocumentSection({ applicationId }: DocumentSectionProps) {
	// if (isLoading) return <Loader />;

	// if (isSuccess)
	// 	return (
	// 		<LoanStepMessage
	// 			title="Wait for a decision on the application"
	// 			description="The answer will come to your mail within 10 minutes"
	// 		/>
	// 	);

	return (
		<article className="document-section">
			<div className="document-section__title">
				<div className="title__document-text">
					<h2>Payment Schedule</h2>
					<p>Step 3 of 5</p>
				</div>
			</div>

			<Table classes="document-section__table">
				<TableHeader>
					<TableRow>
						<TableCell>number</TableCell>
						<TableCell>date</TableCell>
						<TableCell>total payment</TableCell>
						<TableCell>interest payment</TableCell>
						<TableCell>debt payment</TableCell>
						<TableCell>remaining debt</TableCell>
					</TableRow>
				</TableHeader>

				<TableBody>
					{rows.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{index}</TableCell>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.totalPayment}</TableCell>
							<TableCell>{row.interestPayment}</TableCell>
							<TableCell>{row.debtPayment}</TableCell>
							<TableCell>{row.remainingDebt}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</article>
	);
}
