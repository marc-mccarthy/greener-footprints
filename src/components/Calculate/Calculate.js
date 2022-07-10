import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Calculate.css';
import {
	Box,
	Button,
	FormControl,
} from '@mui/material';
import AddressInput from '../AddressInput/AddressInput';
import Passengers from '../Passengers/Passengers';
import VehicleMakes from '../VehicleMakes/VehicleMakes';
import VehicleYears from '../VehicleYears/VehicleYears';
import VehicleModels from '../VehicleModels/VehicleModels';

function Calculate(props) {
	const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        startAddress: '',
        endAddress: '',
        passengers: '',
        vehicleMake: '',
        vehicleYear: '',
        vehicleModel: '',
    });

	const readySetGo = () => {
		dispatch({
			type: 'SUBMIT_CALCULATOR',
			payload: formData,
		});
	};

	return (
		<div className='Calculate'>
			<div>
				<h1>Greener Prints: Road Trip Edition</h1>
			</div>
			<form>
				<Box sx={{ minWidth: 120 }}>
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
						<Button onClick={readySetGo}>Calculate</Button>
					</FormControl>
				</Box>
			</form>
		</div>
	);
}

export default Calculate;
