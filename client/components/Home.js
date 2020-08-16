import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
	return (
		<div className='homeOuterContainer'>
			<div className='homeMessage'>
				<p>Tell us about your toolkit. What do you need to build your application?</p>
			</div>
			<div className='homeContainer'>
				<div className='optionsContainer'>
					<ul>Frontend Library
						<li><input type='radio' name='library' checked={props.selected.noLibrary} onChange={() => props.setSelected({ ...props.selected, noLibrary: (!props.selected.noLibrary), react: false })} /> No Library</li>
						<li><input type='radio' name='library' onChange={() => props.setSelected({ ...props.selected, noLibrary: false, react: (!props.selected.react) })} /> React</li>
					</ul>
					<ul>UI
						<li><input type='checkbox' onChange={() => props.setSelected({ ...props.selected, bootstrap: (!props.selected.bootstrap), css: true })} /> Bootstrap</li>
					</ul>
					<ul>Transpiler
						<li><input type='checkbox' value={props.selected.babel} checked={true} readOnly /> Babel</li>
					</ul>
					<ul>Styling
						<li><input type='checkbox' checked={props.selected.css} onChange={() => props.setSelected({ ...props.selected, css: (!props.selected.css) })} /> CSS</li>
						<li><input type='checkbox' onChange={() => props.setSelected({ ...props.selected, sass: (!props.selected.sass) })} /> Sass</li>
					</ul>
					<ul>Webpack Plugins
						<li><input type='checkbox' onChange={() => props.setSelected({ ...props.selected, htmlWP: (!props.selected.htmlWP) })} /> HTML Webpack Plugin</li>
						<li><input type='checkbox' onChange={() => props.setSelected({ ...props.selected, miniCssWP: (!props.selected.miniCssWP) })} /> MiniCSSExtract Plugin</li>
					</ul>
				</div>
				<Link className='start' to='/installs'>
					<button className='startButton'>Start</button>
				</Link>
			</div>
		</div>
	)
}

export default Home;