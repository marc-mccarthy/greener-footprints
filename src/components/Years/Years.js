import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function Years({ formData, setFormData }) {

	const dispatch = useDispatch();
	const years = useSelector(store => store.years);

	const yearsChange = (e) => {
        setFormData({
			...formData,
			year: e.target.value,
			model: '',
		});
        console.log('YEAR:', e.target.value);
		dispatch({
			type: 'MODELS_SAGA',
			payload: { make: formData.make, year: e.target.value },
		});
	};

	return (
		<Box>
			<FormControl size='small'>
				{/* VEHICLE YEARS */}
				<InputLabel id='year'>Year</InputLabel>
				<Select
					sx={{ width: 150 }}
					labelId='Select Year'
					id='year'
					value={formData.year}
					label='Year'
					onChange={yearsChange}
				>
					{years.map(year => (
						<MenuItem key={year} value={year}>
							{year}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

export default Years;
