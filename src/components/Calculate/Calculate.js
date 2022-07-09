import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Calculate.css';

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
	const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');

    const vehicleMakesChange = (e) => {
        setVehicleMake(e.target.value);
        dispatch({ type: 'VEHICLE_YEARS_SAGA', payload: vehicleMake });
    }

    const vehicleYearsChange = e => {
		setVehicleYear(e.target.value);
		dispatch({ type: 'VEHICLE_MODELS_SAGA', payload: { vehicleMake, vehicleYear }});
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
						<div>
							<select onChange={vehicleMakesChange}>
								<option value='' disabled selected>
									Vehicle Makes
								</option>
                                    {vehicleMakes.map(make => (
                                        <option
                                            key={make.data.id}
                                            value={make.data.id}
                                        >
                                            {make.data.attributes.name}
                                        </option>
                                    ))}
							</select>
							<select onChange={vehicleYearsChange}>
								<option value='' disabled selected>
									Vehicle Years
								</option>
                                    {vehicleYears.map(year => (
                                        <option
                                            key={year}
                                            value={year}
                                        >
                                            {year}
                                        </option>
                                    ))}
							</select>
							<select>
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
						</div>
						<div>
							<input
								type='integer'
								onChange={e => setPassengers(e.target.value)}
								placeholder='Passenger Count'
							/>
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
