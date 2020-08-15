import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const Installs = () => {
	const history = useHistory();

	// const npms = [];
	// for (let key in props.steps){
	// 	npms.push(key.npm)
	// }

	return (
		<div className='installsContainer'>
			<div className='installMessage'>
				<p>Before we begin the Webpack Config walkthrough, be sure to install your dependencies.</p>
				<p> To do this, navigate to your project folder in your terminal and type:</p>
			</div>
			<div className='installInstruction'>
				npm install (dependencies)
			</div>

			{/* stretch feature: differentiate between dependencies and dev dependencies
			and have two separate npm installs for them on this page -Kadir */}
			<div>
				<button onClick={() => history.goBack()}>Go Back</button>
				<Link to='/tutorial'>
					<button>Continue</button>
				</Link>
			</div>
		</div>
	)
}

export default Installs;