import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';
import DisplayTrip from '../DisplayTrip/DisplayTrip';
import DisplayMap from '../DisplayMap/DisplayMap';
import SendIcon from '@mui/icons-material/Send';
import HistoryButton from '../HistoryButton/HistoryButton';
import ChartsButton from '../ChartsButton/ChartsButton';
import LoadingBar from '../LoadingBar/LoadingBar';

function NewTrip() {
	// PAGE LOAD
	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	// REDUCERS
	const getTrips = useSelector(store => store.getTrips);
	const lastTrip = getTrips[getTrips.length - 1];
	const getMap = useSelector(store => store.getMap);

    // If lastTrip holds a value, go get the map
	useEffect(() => {
		if (lastTrip != undefined) {
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

    // BUTTON CLICK SEND FORM DATA
	const readySetGo = () => {
		for (let key in formData) {
			if (formData[key] === '') {
				alert('Please fill out all fields');
				return false;
			}
		}
		dispatch({
			type: 'NEW_TRIP_SAGA',
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
	};

	return (
		<Box className='NewTrip'>
			<Box m={2}>
				<Typography variant='h4' color='primary' align='center'>
					New Trip
				</Typography>
			</Box>
			<Box m={3}>
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
						<Makes formData={formData} setFormData={setFormData} />
					</Grid>
					<Grid item>
						<Years formData={formData} setFormData={setFormData} />
					</Grid>
					<Grid item>
						<Models formData={formData} setFormData={setFormData} />
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

			{getTrips.length === 0 ||
			lastTrip === undefined ||
			Object.keys(getMap).length === 0 ? (
				<Box mt={10}>
					<LoadingBar />
				</Box>
			) : (
				<Box m={3}>
					<Box style={{ height: '100%', width: '100%' }} mt={6}>
						<Box m={3}>
							<Typography
								variant='h5'
								color='primary'
								align='center'
							>
								Previous Trip
							</Typography>
						</Box>
						<Grid container direction='row' wrap='wrap' spacing={1}>
							<Grid xs={6} align='center' item>
								<DisplayTrip trip={lastTrip} />
							</Grid>
							<Grid xs={6} align='center' item>
								<DisplayMap getMap={getMap} />
							</Grid>
						</Grid>
					</Box>

					<Box m={10}>
						<Stack
							direction='row'
							justifyContent='center'
							alignItems='center'
							spacing={3}
						>
							<HistoryButton />
							<ChartsButton />
						</Stack>
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default NewTrip;
