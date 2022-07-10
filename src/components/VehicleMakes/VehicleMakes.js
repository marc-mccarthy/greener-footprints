import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function VehicleMakes({ formData, setFormData }) {

	useEffect(() => {
		dispatch({ type: 'VEHICLE_MAKES_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const vehicleMakes = useSelector(store => store.vehicleMakes);

	const vehicleMakesChange = (e) => {
        setFormData({
			...formData,
			vehicleMake: e.target.value,
			vehicleYear: '',
			vehicleModel: '',
		});
        console.log('VEHICLE MAKE:', e.target.value);
		dispatch({ type: 'VEHICLE_YEARS_SAGA', payload: { vehicleMake: e.target.value } });
	};

	return (
        <FormControl fullWidth>
            {/* VEHICLE MAKES */}
            <InputLabel id='make'>Make</InputLabel>
            <Select
                labelId='Select Make'
                id='make'
                value={formData.vehicleMake}
                label='Make'
                onChange={vehicleMakesChange}
            >
                {vehicleMakes.map(make => (
                    <MenuItem key={make.data.id} value={make.data.id}>
                        {make.data.attributes.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
	);
}

export default VehicleMakes;
