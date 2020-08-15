import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const Tutorial = () => {
	const history = useHistory();

	return (
		<div className='tutorialContainer'>
			<div className='mid'>
				<div className='midLeft'>text</div>
				<div className='midRight'>code</div>
			</div>
			<div className='buttonsContainer'>
				<button onClick={() => history.goBack()}>Go Back</button>
				<Link to='/tutorial'>
					<button>Continue</button>
				</Link>
			</div>
		</div>
	)
}

export default Tutorial;