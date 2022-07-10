import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Calculate.css';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function Calculate(props) {
	useEffect(() => {
		dispatch({ type: 'VEHICLE_MAKES_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const vehicleMakes = useSelector(store => store.vehicleMakes);
	const vehicleYears = useSelector(store => store.vehicleYears);
	const vehicleModels = useSelector(store => store.vehicleModels);

	const [startAddress, setStartAddress] = useState('');
	const [endAddress, setEndAddress] = useState('');
	const [modeOfTransport, setModeOfTransport] = useState('');
	const [passengers, setPassengers] = useState('');
	const [vehicleMake, setVehicleMake] = useState('');
	const [vehicleYear, setVehicleYear] = useState('');
	const [vehicleModel, setVehicleModel] = useState('');

	let maxPersons = [];
	{
		for (let num = 0; num <= 10; num++) {
			maxPersons.push(
				<MenuItem key={num} value={num}>
					{num}
				</MenuItem>
			);
		}
	}

	const vehicleMakesChange = e => {
		setVehicleMake(e.target.value);
		dispatch({ type: 'VEHICLE_YEARS_SAGA', payload: e.target.value });
	};

	const vehicleYearsChange = e => {
		setVehicleYear(e.target.value);
		dispatch({
			type: 'VEHICLE_MODELS_SAGA',
			payload: { vehicleMake, vehicleYear: e.target.value },
		});
	};

	const vehicleModelsChange = e => {
		setVehicleModel(e.target.value);
	};

	const readySetGo = () => {
		dispatch({
			type: 'SUBMIT_CALCULATOR',
			payload: {
				startAddress,
				endAddress,
				modeOfTransport,
				passengers,
				vehicleMake,
				vehicleYear,
				vehicleModel,
			},
		});
	};

	return (
		<div>
			{vehicleMakes.length === 0 ? (
				<h3>Loading...</h3>
			) : (
				<div className='Calculate'>
					<div>
						<h1>Greener Prints: Road Trip Edition</h1>
					</div>
					<form>
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								{/* START ADDRESS */}
								<input
									type='text'
									onChange={e =>
										setStartAddress(e.target.value)
									}
									placeholder='Starting Address'
								/>
								{/* END ADDRESS */}
								<input
									type='text'
									onChange={e =>
										setEndAddress(e.target.value)
									}
									placeholder='Ending Address'
								/>
							</FormControl>

							{/* MODE OF TRANSPORT */}
							<FormControl fullWidth>
								<InputLabel id='mode'>
									Mode of Transport
								</InputLabel>
								<Select
									labelId='Select Mode of Transport'
									id='mode'
									value={modeOfTransport}
									label='Mode of Transport'
									onChange={e =>
										setModeOfTransport(e.target.value)
									}
								>
									{maxPersons}
								</Select>
							</FormControl>

							{/* PASSENGER COUNT */}
							<FormControl fullWidth>
								<InputLabel id='make'>Passengers</InputLabel>
								<Select
									labelId='Select Passengers'
									id='passengers'
									value={passengers}
									label='Passengers'
									onChange={e =>
										setPassengers(e.target.value)
									}
								>
									{maxPersons}
								</Select>
							</FormControl>

							{/* VEHICLE MAKES */}
							<FormControl fullWidth>
								<InputLabel id='make'>Make</InputLabel>
								<Select
									labelId='Select Make'
									id='make'
									value={vehicleMake}
									label='Make'
									onChange={vehicleMakesChange}
								>
									{vehicleMakes.map(make => (
										<MenuItem
											key={make.data.id}
											value={make.data.id}
										>
											{make.data.attributes.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							{/* VEHICLE YEARS */}
							<FormControl fullWidth>
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

							{/* VEHICLE MODELS */}
							<FormControl fullWidth>
								<InputLabel id='make'>Model</InputLabel>
								<Select
									labelId='Select Model'
									id='model'
									value={vehicleModel}
									label='Model'
									onChange={vehicleModelsChange}
								>
									{vehicleModels.map(model => (
										<MenuItem
											key={model.data.id}
											value={model.data.id}
										>
											{model.data.attributes.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl>
								<Button onClick={readySetGo}>Calculate</Button>
							</FormControl>
						</Box>
					</form>
				</div>
			)}
		</div>
	);
}

export default Calculate;
