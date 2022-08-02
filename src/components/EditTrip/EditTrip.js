import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import LoadingBar from '../LoadingBar/LoadingBar';
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

function EditTrip(props) {
	// PAGE LOAD
	const { id } = useParams();
	useEffect(() => {
		dispatch({ type: 'FIND_TRIP_SAGA', payload: id });
	}, []);

	// REDUCERS
	const findTrip = useSelector(store => store.findTrip);
	const getMap = useSelector(store => store.getMap);

	// HOOK ABBREVIATIONS
	const dispatch = useDispatch();
	const history = useHistory();

	// STATES
	const [formData, setFormData] = useState(
		{
			id: findTrip.id,
			startAddress: '',
			endAddress: '',
			passengers: '',
			model: findTrip.modelId,
		},
		[findTrip]
	);
	const [showCar, setShowCar] = useState(false);

	// STATES CHANGE WHEN FINDTRIP LOADS
	useEffect(() => {
		if (findTrip != undefined) {
            setFormData({
				id: findTrip.id,
				startAddress: findTrip.startAddress,
				endAddress: findTrip.endAddress,
				passengers: findTrip.passengers,
				model: findTrip.modelId,
			});
            setShowCar(false);
			dispatch({ type: 'GET_MAP_SAGA', payload: findTrip });
		}
	}, [findTrip]);

	const showCarInfo = () => {
		setFormData({
			...formData,
			make: '',
			year: '',
			model: '',
		});
		setShowCar(!showCar);
	};

	const readySetGo = () => {
		for (let key in formData) {
			if (formData[key] === '') {
				alert('Please fill out all fields');
				return false;
			}
		}
		if (
			formData.startAddress === findTrip.startAddress &&
			formData.endAddress === findTrip.endAddress &&
			formData.passengers === findTrip.passengers &&
            formData.model === findTrip.modelId
		) {
			alert('No changes were made');
			return false;
		}
        setShowCar(!showCar);
		dispatch({ type: 'FIND_TRIP', payload: {} });
		dispatch({
			type: 'UPDATE_TRIP_SAGA',
			payload: {
				id: formData.id,
				startAddress: formData.startAddress,
				endAddress: formData.endAddress,
				passengers: formData.passengers,
				model: formData.model,
			},
		});
	};

	return (
		<Box className='EditTrip'>
			{Object.keys(findTrip).length === 0 ? (
				<Box mt={25} display='flex' justifyContent='center' alignItems='center'>
					<LoadingBar />
				</Box>
			) : (
				<Box>
					<Box mt={3}>
						<Grid
							container
							spacing={2}
							direction='row'
							justifyContent='center'
							alignItems='center'
						>
							<Grid item>
								<Typography
									variant='h4'
									color='primary'
									align='center'
								>
									Edit Trip
								</Typography>
							</Grid>
							<Grid item>
								{showCar ? (
									<div></div>
								) : (
									<Button
										size='small'
										onClick={showCarInfo}
										sx={{ height: 25, width: 90 }}
										variant='contained'
									>
										Edit Car
									</Button>
								)}
							</Grid>
						</Grid>
					</Box>

					<Box m={3}>
						<Grid
							container
							spacing={2}
							m={2}
							direction='row'
							justifyContent='center'
							alignItems='center'
						>
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
									<Button
										size='large'
										onClick={readySetGo}
										sx={{ width: 100 }}
										variant='contained'
										startIcon={<SendIcon />}
									>
										Submit
									</Button>
								</Grid>
							</Grid>
							<Grid
								container
								spacing={2}
								direction='row'
								justifyContent='center'
								alignItems='center'
							>
								<Grid mt={2} item>
									{showCar ? (
										<Makes
											formData={formData}
											setFormData={setFormData}
										/>
									) : null}
								</Grid>
								<Grid mt={2} item>
									{showCar ? (
										<Years
											formData={formData}
											setFormData={setFormData}
										/>
									) : null}
								</Grid>
								<Grid mt={2} item>
									{showCar ? (
										<Models
											formData={formData}
											setFormData={setFormData}
										/>
									) : null}
								</Grid>
							</Grid>
						</Grid>
					</Box>

					{Object.keys(getMap).length === 0 ? (
						<Box
							display='flex'
							justifyContent='center'
							alignItems='center'
						>
							<LoadingBar />
						</Box>
					) : (
						<Box>
							<Box
								style={{ height: '100%', width: '100%' }}
								mt={6}
							>
								<Grid
									container
									direction='row'
									wrap='wrap'
									spacing={1}
								>
									<Grid xs={6} align='center' item>
										<DisplayTrip trip={findTrip} />
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
									<Button
										size='large'
										onClick={() => history.push('/history')}
										sx={{ width: 110 }}
										variant='contained'
										startIcon={<HistoryIcon />}
									>
										History
									</Button>
									<Button
										size='large'
										onClick={() => history.push('/charts')}
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
			)}
		</Box>
	);
}

export default EditTrip;
