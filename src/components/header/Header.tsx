import { Link } from 'react-router';
import BurgerMenuIcon from '@/icons/BurgerMenuIcon';
import '@/components/header/header.scss';
import { useState } from 'react';
import CrossMenuIcon from '@/icons/CrossMenuIcon';

export default function Header() {
	const [isActive, setIsActive] = useState(false);

	const handleOpenMenu = () => {
		setIsActive(!isActive);
		console.log(isActive);
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
			<button className={`button cross-menu ${isActive && 'active'}`} onClick={handleOpenMenu}>
				<CrossMenuIcon />
			</button>
		</header>
	);
}
