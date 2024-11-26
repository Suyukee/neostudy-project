import { Link } from 'react-router';
import '@/components/footer/footer.scss';

export default function Footer() {
	return (
		<footer className="footer-section">
			<div className="footer">
				<div className="footer__address">
					<img src="/images/logo.png" height="50" alt="Neoflex" />
					<address className="address__text">
						<a className="address__tel" href="tel:+74959842513">
							+7 (495) 984 25 13
						</a>
						<a className="address__mail" href="mailto:info@neoflex.ru">
							info@neoflex.ru
						</a>
					</address>
				</div>

				<nav className="footer__navbar">
					<Link to="/" className="navbar__item">
						About bank
					</Link>
					<Link to="/" className="navbar__item">
						Ask a Question
					</Link>
					<Link to="/" className="navbar__item">
						Quality of service
					</Link>
					<Link to="/" className="navbar__item">
						Requisites
					</Link>
					<Link to="/" className="navbar__item">
						Press center
					</Link>
					<Link to="/" className="navbar__item">
						Bank career
					</Link>
					<Link to="/" className="navbar__item">
						Investors
					</Link>
					<Link to="/" className="navbar__item">
						Analytics
					</Link>
					<Link to="/" className="navbar__item">
						Business and processes
					</Link>
					<Link to="/" className="navbar__item">
						Compliance and business ethics
					</Link>
				</nav>

				<hr className="footer__hr" />

				<p className="footer__description">
					We use cookies to personalize our services and improve the user experience of our website.
					Cookies are small files containing information about previous visits to a website. If you
					do not want to use cookies, please change your browser settings
				</p>
			</div>
		</footer>
	);
}
