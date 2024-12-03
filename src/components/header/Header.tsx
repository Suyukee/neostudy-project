import { useState } from 'react';
import { Link } from 'react-router';
import BurgerMenuIcon from '@/icons/BurgerMenuIcon';
import CrossMenuIcon from '@/icons/CrossMenuIcon';
import '@/components/header/header.scss';

export default function Header() {
	const [isActive, setIsActive] = useState(false);

	const handleOpenMenu = () => {
		setIsActive(true);
	};

	const handleCloseMenu = () => {
		setIsActive(false);
	};

	return (
		<header className="header">
			<Link to="/" className="header__logo">
				NeoBank
			</Link>

			<nav className={`header__navbar ${isActive && 'active'}`}>
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

			<button className={`button button-primary ${isActive && 'active'}`}>Online Bank</button>

			<button className={`button burger-menu ${isActive && 'active'}`} onClick={handleOpenMenu}>
				<BurgerMenuIcon />
			</button>
			<button className={`button cross-menu ${isActive && 'active'}`} onClick={handleCloseMenu}>
				<CrossMenuIcon />
			</button>
		</header>
	);
}
