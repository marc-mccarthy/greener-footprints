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

function Charts(props) {

	useEffect(() => {
		console.log('USE EFFECT WORKING');
	}, []);

    const dispatch = useDispatch();

	return (
		<div className='Charts'>
			<h1>Charts</h1>
		</div>
	);
}

export default Charts;
