import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
    Grid,
    Stack,
} from '@mui/material';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';

function NewTrip(props) {

    useEffect(() => {
        dispatch({ type: 'GET_TRIPS_SAGA' });
    }, []);

	const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const trips = useSelector(store => store.getTrips);
    const lastTrip = trips.length > 0 ? trips[trips.length - 1] : null;


    const [formData, setFormData] = useState({
        startAddress: '',
        endAddress: '',
        passengers: '',
        make: '',
        year: '',
        model: '',
        userId: user.id,
    });

	const readySetGo = () => {
		dispatch({
			type: 'NEW_TRIP',
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
						<Makes formData={formData} setFormData={setFormData} />
					</FormControl>
					<FormControl>
						<Years formData={formData} setFormData={setFormData} />
					</FormControl>
					<FormControl>
						<Models formData={formData} setFormData={setFormData} />
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
				<Box>
					<Grid>
						<h3>{lastTrip.startAddress}</h3>
						<h3>{lastTrip.endAddress}</h3>
						<h3>{lastTrip.passengers}</h3>
					</Grid>
				</Box>
			</form>
		</div>
	);
}

export default NewTrip;
