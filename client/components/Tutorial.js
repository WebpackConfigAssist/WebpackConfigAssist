import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const Tutorial = (props) => {
	const history = useHistory();
	let requires = [];
	for (let key in props.steps) {
		if (props.steps[key].require !== null) {
			requires.push(<pre><code><p key={key}>{props.steps[key].require}</p></code></pre>)
		}
	}

	return (
		<div className='tutorialContainer'>
			<div className='mid'>
				<div className='midLeft'>text</div>
				<div className='midRight'>
					<div>{requires}</div>
					<pre>
						<code>
							{
								`{\n  entry: "./src/index.js", \n  output: {\n    filename: "main.js",\n    path: "path.resolve(__dirname, dist)",\n  } \n}`
							}
						</code>
					</pre>
				</div>
			</div>
			<div className='buttonsContainer'>
				<button onClick={() => history.goBack()}>Go Back</button>
				<Link to={`/tutorial/${0}`}>
					<button>Continue</button>
				</Link>
			</div>
		</div>
	)
}

export default Tutorial;