import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadingBar from '../../images/loading-bar.gif';
import {
    Box,
    FormControl,
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
		<Box className='Makes'>
            <FormControl>
				{/* VEHICLE MAKES */}
				<InputLabel id='make'>Make</InputLabel>
				<Select
					sx={{ width: 175 }}
					labelId='Select Make'
					id='make'
					value={formData.make}
					label='make'
					onChange={makesChange}
				>
					{makes.map(make => (
						<MenuItem key={make.data.id} value={make.data.id}>
							{make.data.attributes.name}
						</MenuItem>
					))}
				</Select>
            </FormControl>
		</Box>
	);
}

export default Makes;
