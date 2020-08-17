import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Installs from './Installs';
import Nav from './Nav';
import About from './About';
import Tutorial from './Tutorial';
import Step from './Step';
import Troubleshoot from './Troubleshoot';

const App = () => {

	const [selected, setSelected] = useState({
		name1: false,
		name2: false,
		noLibrary: true,
		react: false,
		bootstrap: false,
		css: false,
		sass: false,
		htmlWP: false,
		miniCssWP: false,
	});

	// const [data, setData] = useState({});
	const [steps, setSteps] = useState([]);

	const createSteps = () => {
		fetch('http://localhost:3000/api/')
			.then(data => data.json())
			.then(data => {
				// setData(data)
				// console.log(data);
				const stepsList = [];
				for (let key in selected) {
					if (selected[key] === true) {
						stepsList.push(data[key])
					}
				}
				// console.log(stepsList)
				return stepsList;
			})
			.then(returned => {
				console.log(returned);
				setSteps(returned);
				console.log(steps);
			})

			.catch(err => console.log(err))
	}

	useEffect(() => {
		createSteps();
	}, [])

	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact render={(props) => <Home {...props} selected={selected} setSelected={setSelected} />} />
					<Route path='/about' component={About} />
					<Route path='/installs' render={(props) => <Installs {...props} steps={steps} />} />
					<Route path='/tutorial' exact render={(props) => <Tutorial {...props} step={steps} />} />
					<Route path='/tutorial/:id' exact render={(props) => <Step {...props} steps={steps} />} />
					<Route path='/troubleshoot' component={Troubleshoot} />
					{/* <Route path={`/tutorial/:${steps.length}`} exact component={About} /> */}
				</Switch>
			</div>
		</Router>
	)
}

export default App
