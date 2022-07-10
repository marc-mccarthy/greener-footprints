import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function VehicleMakes({ vehicleMake, setVehicleMake, setVehicleYear, setVehicleModel }) {

	useEffect(() => {
		dispatch({ type: 'VEHICLE_MAKES_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const vehicleMakes = useSelector(store => store.vehicleMakes);

	const vehicleMakesChange = (e) => {
		setVehicleMake(e.target.value);
        console.log('VEHICLE MAKE:', e.target.value);
        setVehicleYear('');
        setVehicleModel('');
		dispatch({ type: 'VEHICLE_YEARS_SAGA', payload: { vehicleMake: e.target.value } });
	};

	return (
        <FormControl fullWidth>
            {/* VEHICLE MAKES */}
            <InputLabel id='make'>Make</InputLabel>
            <Select
                labelId='Select Make'
                id='make'
                value={vehicleMake}
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
