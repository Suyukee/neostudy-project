import { Outlet } from 'react-router';
import '@/layouts/loan-layout/loan-layout.scss';

export default function LoanLayout() {
	return (
		<div className="loan-layout">
			<Outlet />
		</div>
	);
}
