import React from 'react';
import Logo from '../images/logo.png';

export function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<nav className='header-nav'>
					<a href='/'>
						<img className='header-nav__logo' src={Logo} alt='InstaViral' />
					</a>
				</nav>
			</div>
		</header>
	);
}
