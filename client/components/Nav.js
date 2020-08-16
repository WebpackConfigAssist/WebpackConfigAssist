import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<div className='logo'>Webpack Config Assistant Logo</div>
			<div className='homeAbout'>
				<div >
					<Link to='/'><div>Home</div></Link>
				</div>
				<div>
					<Link to='/about' className='about'>About</Link>
				</div>
			</div>
		</div>
	)
}

export default Nav;