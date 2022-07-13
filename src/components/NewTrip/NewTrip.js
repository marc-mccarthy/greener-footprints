import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
    Stack,
} from '@mui/material';
import AddressInput from '../AddressInput/AddressInput';
import Passengers from '../Passengers/Passengers';
import VehicleMakes from '../VehicleMakes/VehicleMakes';
import VehicleYears from '../VehicleYears/VehicleYears';
import VehicleModels from '../VehicleModels/VehicleModels';

function NewTrip(props) {
	const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const [formData, setFormData] = useState({
        startAddress: '',
        endAddress: '',
        passengers: '',
        vehicleMake: '',
        vehicleYear: '',
        vehicleModel: '',
        userId: user.id,
    });

	const readySetGo = () => {
		dispatch({
			type: 'SUBMIT_CALCULATOR',
			payload: formData,
		});
	};

	return (
		<div className='NewTrip'>
			<div>
				<h1>Greener Foot(prints): Road Trip Edition</h1>
			</div>
			<form>
				<Box sx={{ minWidth: 120 }}>
					<Stack direction="row">
						<AddressInput
							formData={formData}
							setFormData={setFormData}
						/>

						<Passengers
							formData={formData}
							setFormData={setFormData}
						/>

						<VehicleMakes
							formData={formData}
							setFormData={setFormData}
						/>

						<VehicleYears
							formData={formData}
							setFormData={setFormData}
						/>

						<VehicleModels
							formData={formData}
							setFormData={setFormData}
						/>

						<FormControl>
							<Button onClick={readySetGo}>NewTrip</Button>
						</FormControl>
					</Stack>
				</Box>
			</form>
		</div>
	);
}

export default NewTrip;
