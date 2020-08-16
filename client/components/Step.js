import React, { useEffect } from 'react';
import '../css/App.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import Troubleshoot from './Troubleshoot'

const Step = (props) => {
	const history = useHistory();
	const index = useParams();
	if (Number(index.id) === props.steps.length) {
		return (
			<div className='finalStep'>
				<div>You have set up your Webpack! Continue to Troubleshoot to fix potential bugs that may arise after setting up Webpack.</div>
				<div>
					<Link to='/troubleshoot'>
						<button>Troubleshoot</button>
					</Link>
				</div>
			</div>
		)
	} else {

		return (
			<div className='stepContainer'>
				<div className='mid'>
					<div className='midLeft'>{props.steps[index.id].description}</div>
					<div className='midRight'>{props.steps[index.id].code}</div>
				</div>
				<div className='buttonsContainer'>
					<button onClick={() => history.goBack()}>Go Back</button>
					<Link to={`/tutorial/${Number(index.id) + 1}`}>
						<button>Continue</button>
					</Link>
				</div>
			</div>
		)
	}
}

export default Step;