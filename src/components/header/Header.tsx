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
					onClick={handleCloseMenu}
				>
					Credit card
				</NavLink>
				<NavLink
					to="/product"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
					onClick={handleCloseMenu}
				>
					Product
				</NavLink>
				<NavLink
					to="/account"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
					onClick={handleCloseMenu}
				>
					Account
				</NavLink>
				<NavLink
					to="/resources"
					className={({ isActive }) => (isActive ? ' navbar__item_active' : 'navbar__item')}
					onClick={handleCloseMenu}
				>
					Resources
				</NavLink>
			</nav>

			<button className={`header__button button-primary ${isActive && 'active'}`}>
				Online Bank
			</button>

			<button
				className={`header__button burger-menu ${isActive && 'active'}`}
				onClick={handleOpenMenu}
			>
				<BurgerMenuIcon />
			</button>
			<button
				className={`header__button cross-menu ${isActive && 'active'}`}
				onClick={handleCloseMenu}
			>
				<CrossMenuIcon />
			</button>
		</header>
	);
}
