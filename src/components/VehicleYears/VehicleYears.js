import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function VehicleYears({ formData, setFormData }) {

	const dispatch = useDispatch();
	const vehicleYears = useSelector(store => store.vehicleYears);

	const vehicleYearsChange = (e) => {
        setFormData({
			...formData,
			vehicleYear: e.target.value,
			vehicleModel: '',
		});
        console.log('VEHICLE YEAR:', e.target.value);
		dispatch({
			type: 'VEHICLE_MODELS_SAGA',
			payload: { vehicleMake: formData.vehicleMake, vehicleYear: e.target.value },
		});
	};

	return (
		<div>
			{/* VEHICLE YEARS */}
			<InputLabel id='year'>Year</InputLabel>
			<Select
				sx={{ width: 150 }}
				labelId='Select Year'
				id='year'
				value={formData.vehicleYear}
				label='Year'
				onChange={vehicleYearsChange}
			>
				{vehicleYears.map(year => (
					<MenuItem key={year} value={year}>
						{year}
					</MenuItem>
				))}
			</Select>
		</div>
	);
}

export default VehicleYears;
