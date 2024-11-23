import { Outlet } from 'react-router';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function RootLayout() {
	return (
		<div className="app">
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
}
