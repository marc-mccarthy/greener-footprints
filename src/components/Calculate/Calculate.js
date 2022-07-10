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

	/*
    const [formData, setFormData] = useState({
        startAddress: '',
        endAddress: '',
        passengers: '',
        vehicleMake: '',
        vehicleYear: '',
        vehicleModel: '',
    });
    */

	const [startAddress, setStartAddress] = useState('');
	const [endAddress, setEndAddress] = useState('');
	const [passengers, setPassengers] = useState('');
	const [vehicleMake, setVehicleMake] = useState('');
	const [vehicleYear, setVehicleYear] = useState('');
	const [vehicleModel, setVehicleModel] = useState('');

	const readySetGo = () => {
		dispatch({
			type: 'SUBMIT_CALCULATOR',
			payload: {
				startAddress,
				endAddress,
				passengers,
				vehicleMake,
				vehicleYear,
				vehicleModel,
			},
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
						setStartAddress={setStartAddress}
						setEndAddress={setEndAddress}
					/>

					<Passengers
						passengers={passengers}
						setPassengers={setPassengers}
					/>

					<VehicleMakes
						vehicleMake={vehicleMake}
						setVehicleMake={setVehicleMake}
						setVehicleYear={setVehicleYear}
						setVehicleModel={setVehicleModel}
					/>

					<VehicleYears
						vehicleYear={vehicleYear}
						setVehicleYear={setVehicleYear}
						vehicleMake={vehicleMake}
						setVehicleModel={setVehicleModel}
					/>

					<VehicleModels
						vehicleModel={vehicleModel}
						setVehicleModel={setVehicleModel}
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
