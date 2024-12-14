import { useState } from 'react';
import { Link, NavLink } from 'react-router';
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
				<NavLink
					to="/loan"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
				>
					Credit card
				</NavLink>
				<NavLink
					to="/product"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
				>
					Product
				</NavLink>
				<NavLink
					to="/account"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
				>
					Account
				</NavLink>
				<NavLink
					to="/resources"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
				>
					Resources
				</NavLink>
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
