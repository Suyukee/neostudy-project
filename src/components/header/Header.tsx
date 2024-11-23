import { Link } from 'react-router';

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">NeoBank</div>
			<nav className="header__navbar">
				<Link to="/" className="navbar__item">
					Credit card
				</Link>
				<Link to="/" className="navbar__item">
					Product
				</Link>
				<Link to="/" className="navbar__item">
					Account
				</Link>
				<Link to="/" className="navbar__item">
					Resources
				</Link>
			</nav>
			<button className="header__button">Online Bank</button>
		</header>
	);
}
