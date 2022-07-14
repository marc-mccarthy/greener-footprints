import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
    Stack,
} from '@mui/material';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
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
				<Box>
					<FormControl>
						<StartAddress
							formData={formData}
							setFormData={setFormData}
						/>
					</FormControl>
					<FormControl>
						<EndAddress
							formData={formData}
							setFormData={setFormData}
						/>
					</FormControl>
					<FormControl>
						<Passengers
							formData={formData}
							setFormData={setFormData}
						/>
					</FormControl>
					<FormControl>
						<VehicleMakes
							formData={formData}
							setFormData={setFormData}
						/>
					</FormControl>
					<FormControl>
						<VehicleYears
							formData={formData}
							setFormData={setFormData}
						/>
					</FormControl>
					<FormControl>
						<VehicleModels
							formData={formData}
							setFormData={setFormData}
						/>
					</FormControl>
					<FormControl>
						<Button
							size='large'
							onClick={readySetGo}
							sx={{ width: 100 }}
						>
							NewTrip
						</Button>
					</FormControl>
				</Box>
			</form>
		</div>
	);
}

export default NewTrip;
