import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	Box,
	Button,
	FormControl,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import loadingBar from '../../images/loading-bar.gif';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';
import LastTrip from '../LastTrip/LastTrip';

function NewTrip(props) {
	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	const dispatch = useDispatch();
    const history = useHistory();
	const user = useSelector(store => store.user);
	const trips = useSelector(store => store.getTrips);
	const lastTrip = trips.length > 0 ? trips[trips.length - 1] : undefined;

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
		<Box className='NewTrip'>
			{trips.length === 0 || lastTrip.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box>
					<Box mb={5}>
						<Typography variant='h4' color='primary' align='center'>
							New Trip
						</Typography>
					</Box>

					<Box>
						<Grid
							container
							spacing={2}
							direction='row'
							justifyContent='center'
							alignItems='center'
						>
							<Grid item>
								<FormControl>
									<StartAddress
										formData={formData}
										setFormData={setFormData}
									/>
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl>
									<EndAddress
										formData={formData}
										setFormData={setFormData}
									/>
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl>
									<Passengers
										formData={formData}
										setFormData={setFormData}
									/>
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl>
									<Makes
										formData={formData}
										setFormData={setFormData}
									/>
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl>
									<Years
										formData={formData}
										setFormData={setFormData}
									/>
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl>
									<Models
										formData={formData}
										setFormData={setFormData}
									/>
								</FormControl>
							</Grid>
							<Grid item>
								<FormControl>
									<Button
										size='large'
										onClick={readySetGo}
										sx={{ width: 100 }}
										variant='contained'
									>
										Submit
									</Button>
								</FormControl>
							</Grid>
						</Grid>
					</Box>

					<Box>
						{lastTrip === undefined ? (
							<Typography
								variant='h4'
								color='primary'
								align='center'
							>
								No Previous Trips
							</Typography>
						) : (
							<Box>
								<Box m={3}>
									<Typography
										variant='h5'
										color='primary'
										align='center'
									>
										Previous Trip
									</Typography>
								</Box>

								<Box m={3}>
									<LastTrip />
								</Box>

								<Box m={3}>
									<Button
										size='large'
										onClick={() => history.push('/history')}
										sx={{ width: 100 }}
										variant='contained'
									>
										History
									</Button>
								</Box>
							</Box>
						)}
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default NewTrip;
