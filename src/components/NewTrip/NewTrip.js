import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import loadingBar from '../../images/loading-bar.gif';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';
import DisplayTrip from '../DisplayTrip/DisplayTrip';
import DisplayMap from '../DisplayMap/DisplayMap';
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';
import SendIcon from '@mui/icons-material/Send';

function NewTrip() {
	// PAGE LOAD
	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	// REDUCERS
	const getTrips = useSelector(store => store.getTrips);
	const lastTrip = getTrips[getTrips.length - 1];
	const getMap = useSelector(store => store.getMap);

    //
	useEffect(() => {
		if (lastTrip != undefined) {
            console.log('Last Trip:', lastTrip);
			dispatch({ type: 'GET_MAP_SAGA', payload: lastTrip });
		}
	}, [lastTrip]);

	// HOOK ABBREVIATIONS
	const dispatch = useDispatch();
	const history = useHistory();

	// STATES
	const [formData, setFormData] = useState({
		startAddress: '',
		endAddress: '',
		passengers: '',
		make: '',
		year: '',
		model: '',
	});

	const readySetGo = () => {
		// console.log(formData)
		for (let key in formData) {
			if (formData[key] === '') {
				alert('Please fill out all fields');
				return false;
			}
		}
		dispatch({
			type: 'NEW_TRIP',
			payload: formData,
		});
		setFormData({
			startAddress: '',
			endAddress: '',
			passengers: '',
			make: '',
			year: '',
			model: '',
		});
		console.log(formData);
	};

	return (
		<Box className='NewTrip'>
			{getTrips.length === 0 ||
			lastTrip === undefined ||
			Object.keys(getMap).length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box>
					<Box mb={2}>
						<Typography variant='h4' color='primary' align='center'>
							New Trip
						</Typography>
					</Box>
					<Box mr={3} ml={3}>
						<Grid
							container
							spacing={2}
							direction='row'
							justifyContent='center'
							alignItems='center'
						>
							<Grid item>
								<StartAddress
									formData={formData}
									setFormData={setFormData}
								/>
							</Grid>
							<Grid item>
								<EndAddress
									formData={formData}
									setFormData={setFormData}
								/>
							</Grid>
							<Grid item>
								<Passengers
									formData={formData}
									setFormData={setFormData}
								/>
							</Grid>
							<Grid item>
								<Makes
									formData={formData}
									setFormData={setFormData}
								/>
							</Grid>
							<Grid item>
								<Years
									formData={formData}
									setFormData={setFormData}
								/>
							</Grid>
							<Grid item>
								<Models
									formData={formData}
									setFormData={setFormData}
								/>
							</Grid>
							<Grid item>
								<Button
									size='medium'
									onClick={readySetGo}
									sx={{ width: 100 }}
									variant='contained'
									startIcon={<SendIcon />}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Box>

					<Box>
						{getTrips.length === 0 ? (
							<Typography
								variant='h4'
								color='primary'
								align='center'
							>
								No Previous Trips
							</Typography>
						) : (
							<Box>
								<Box
									style={{ height: '100%', width: '100%' }}
									mt={3}
								>
									<Grid
										container
										direction='row'
										wrap='wrap'
										spacing={1}
									>
										<Grid xs={6} align='center' item>
											<DisplayTrip trip={lastTrip} />
										</Grid>
										<Grid xs={6} align='center' item>
											<DisplayMap getMap={getMap} />
										</Grid>
									</Grid>
								</Box>

								<Box mt={5}>
									<Stack
										direction='row'
										justifyContent='center'
										alignItems='center'
										spacing={3}
									>
										<Button
											size='large'
											onClick={() =>
												history.push('/history')
											}
											sx={{ width: 110 }}
											variant='contained'
											startIcon={<HistoryIcon />}
										>
											History
										</Button>
										<Button
											size='large'
											onClick={() =>
												history.push('/charts')
											}
											sx={{ width: 110 }}
											variant='contained'
											startIcon={<BarChartIcon />}
										>
											Chart
										</Button>
									</Stack>
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
