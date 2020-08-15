import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Home = () => {


	return (
		<div className='homeContainer'>
			<div className='optionsContainer'>
				<ul>Main Library
					<li><input type='radio' name='library' /> No Library</li>
					<li><input type='radio' name='library' /> React</li>
				</ul>
				<ul>UI
					<li><input type='checkbox' /> Bootstrap</li>
				</ul>
				<ul>Transpiler
					<li><input type='checkbox' /> Babel</li>
				</ul>
				<ul>Styling
					<li><input type='checkbox' /> CSS</li>
					<li><input type='checkbox' /> Sass</li>
				</ul>
				<ul>Webpack Plugins
					<li><input type='checkbox' /> HTML Webpack Plugin</li>
					<li><input type='checkbox' /> MiniCSSExtract Plugin</li>
				</ul>
			</div>
			<Link className='start' to='/installs'>
				<button>Start</button>
			</Link>
		</div>
	)
}

export default Home;