import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<div className='logo'>
				<div>Webpack Config Assistant</div>
			</div>
			<Link to='/about' className='about'>About</Link>
		</div>
	)
}

export default Nav;