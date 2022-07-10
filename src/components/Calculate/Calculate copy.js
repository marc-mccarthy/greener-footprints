import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Calculate.css';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

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
	const [passengers, setPassengers] = useState('');
	const [vehicleMake, setVehicleMake] = useState(vehicleMakes[0]);
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');

    const vehicleMakesChange = (e) => {
        setVehicleMake(e.target.value);
        dispatch({ type: 'VEHICLE_YEARS_SAGA', payload: vehicleMake });
    }

    const vehicleYearsChange = (e) => {
		setVehicleYear(e.target.value);
		dispatch({ type: 'VEHICLE_MODELS_SAGA', payload: { vehicleMake, vehicleYear }});
	};

    const vehicleModelsChange = e => {
		setVehicleModel(e.target.value);
	};

    const readySetGo = () => {
        console.log(vehicleMake)
        dispatch({ type: 'SEND_DIRECTIONS_SAGA', payload: { startAddress, endAddress, vehicle: 'DRIVING' } });
    }

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
						{/* START & END ADDRESSES */}
						<div>
							<input
								type='text'
								onChange={e => setStartAddress(e.target.value)}
								placeholder='Starting Address'
							/>
							<input
								type='text'
								onChange={e => setEndAddress(e.target.value)}
								placeholder='Ending Address'
							/>
						</div>

						{/* PASSENGER COUNT */}
						<div>
							<input
								type='integer'
								onChange={e => setPassengers(e.target.value)}
								placeholder='Passenger Count'
							/>
						</div>

						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel id='make'>Vehicle Make</InputLabel>
								<Select
									labelId='Select Vehicle Make'
									id='make-select'
                                    defaultValue="Select Vehicle Make"
									value={vehicleMake}
									label='Vehicle Make'
									onChange={vehicleMakesChange}
								>
                                    {vehicleMakes.map(make => (
                                        <MenuItem key={make.data.id} value={make.data.id}>{make.data.attributes.name}</MenuItem>
                                    ))}
								</Select>
							</FormControl>
						</Box>

						{/* TRANSPORT TYPE */}
						<div>
							<select>
								<option value='' disabled selected>
									Mode of Transport
								</option>
								<option value='DRIVING'>Driving</option>
								<option value='TRANSIT'>Transit</option>
								<option value='WALKING'>Walking</option>
								<option value='BICYCLING'>Bicycling</option>
							</select>
						</div>

						{/* VEHICLE SELECTION ROW */}
						<div>
							{/* VEHICLE MAKES */}
							<select onChange={vehicleMakesChange}>
								<option value='' disabled selected>
									Vehicle Makes
								</option>
								{vehicleMakes.map(make => (
									<option
										onChange={vehicleMakesChange}
										key={make.data.id}
										value={make.data.id}
									>
										{make.data.attributes.name}
									</option>
								))}
							</select>

							{/* VEHICLE YEARS */}
							{vehicleYears.length === 0 ? (
								<h3>Loading...</h3>
							) : (
								<select onChange={vehicleYearsChange}>
									<option value='' disabled selected>
										Vehicle Years
									</option>
									{vehicleYears.map(year => (
										<option key={year} value={year}>
											{year}
										</option>
									))}
								</select>
							)}

							{/* VEHICLE MODELS */}
							{vehicleModels.length === 0 ? (
								<h3>Loading...</h3>
							) : (
								<select onChange={vehicleModelsChange}>
									<option value='' disabled selected>
										Vehicle Models
									</option>
									{vehicleModels.map(model => (
										<option
											key={model.data.id}
											value={model.data.id}
										>
											{model.data.attributes.name}
										</option>
									))}
								</select>
							)}
						</div>
						<div>
							<button onClick={readySetGo}>Calculate</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}

export default Calculate;
