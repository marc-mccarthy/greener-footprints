import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import axios from 'axios';

function Makes({ formData, setFormData }) {

	useEffect(() => {
		dispatch({ type: 'MAKES_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const makes = useSelector(store => store.makes);

	const makesChange = (e) => {
        setFormData({
			...formData,
			make: e.target.value,
			year: '',
			model: '',
		});
        console.log('MAKE:', e.target.value);
		dispatch({ type: 'YEARS_SAGA', payload: { make: e.target.value } });
	};

	return (
		<Box>
			{makes.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box className='Makes'>
					{/* VEHICLE MAKES */}
					<InputLabel id='make'>Make</InputLabel>
					<Select
						sx={{ width: 150 }}
						labelId='Select Make'
						id='make'
						value={formData.make}
						label='Make'
						onChange={makesChange}
					>
						{makes.map(make => (
							<MenuItem key={make.data.id} value={make.data.id}>
								{make.data.attributes.name}
							</MenuItem>
						))}
					</Select>
				</Box>
			)}
		</Box>
	);
}

export default Makes;
