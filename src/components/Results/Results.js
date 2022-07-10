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

function Results(props) {

	useEffect(() => {
		console.log('USE EFFECT WORKING');
	}, []);

    const dispatch = useDispatch();

	return (
		<div className='Results'>
			<h1>Results</h1>
		</div>
	);
}

export default Results;
