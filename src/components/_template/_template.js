import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function _Template(props) {

	useEffect(() => {
		console.log('USE EFFECT WORKING');
	}, []);

    const dispatch = useDispatch();

	return (
		<div className='_Template'>
			<h1>_Template</h1>
		</div>
	);
}

export default _Template;
