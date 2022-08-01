import { useState } from 'react';
import { useSelector } from 'react-redux';

function _Template(props) {
	const store = useSelector(store => store);
	const [heading, setHeading] = useState('_Template');

	return (
		<div className='_Template'>
			<h1>{heading}</h1>
		</div>
	);
}

export default _Template;
