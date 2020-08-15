import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Installs from './Installs';
import Nav from './Nav';
import About from './About';
import '../css/App.css';
import Tutorial from './Tutorial';
// import Step from './Step';

const App = () => {

	const [steps, setSteps] = useState({});

	// const createSteps = async () => {
	// 	const allSteps = await fetch('http://localhost:3000/api/');
	// 	setSteps(allSteps);
	// }

	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/installs' component={Installs} />
					<Route path='/tutorial' exact component={Tutorial} />
					{/* <Route path='/tutorial/:id' exact component={Step} /> */}
				</Switch>
			</div>
		</Router>
	)
}

export default App