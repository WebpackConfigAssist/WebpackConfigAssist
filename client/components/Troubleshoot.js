import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const Troubleshoot = () => {
	const history = useHistory();
	return (
		<div className='tbContainer'>
			<div>Commonly encountered problems:</div>
			<div>
				<button onClick={() => history.goBack()}>Go Back</button>
			</div>
		</div>

	)
}

export default Troubleshoot;