import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function VehicleYears({ vehicleYear, setVehicleYear, vehicleMake, setVehicleModel }) {

	const dispatch = useDispatch();
	const vehicleYears = useSelector(store => store.vehicleYears);

	const vehicleYearsChange = (e) => {
		setVehicleYear(e.target.value);
        console.log('VEHICLE YEAR:', e.target.value);
        setVehicleModel('');
		dispatch({
			type: 'VEHICLE_MODELS_SAGA',
			payload: { vehicleMake, vehicleYear: e.target.value },
		});
	};

	return (
		<FormControl fullWidth>
			{/* VEHICLE YEARS */}
			<InputLabel id='year'>Year</InputLabel>
			<Select
				labelId='Select Year'
				id='year'
				value={vehicleYear}
				label='Year'
				onChange={vehicleYearsChange}
			>
				{vehicleYears.map(year => (
					<MenuItem key={year} value={year}>
						{year}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default VehicleYears;
