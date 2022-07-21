import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Button, FormControl, Grid, Typography } from '@mui/material';
import loadingBar from '../../images/loading-bar.gif';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';
import HistoryIcon from '@mui/icons-material/History';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import DisplayTrip from '../DisplayTrip/DisplayTrip';

function EditTrip(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch({ type: 'FIND_TRIP_SAGA', payload: id });
	}, []);

	const [showCar, setShowCar] = useState(false);
	const { id } = useParams();
	const findTrip = useSelector(store => store.findTrip[0]);

	const [formData, setFormData] = useState({
		startAddress: '',
		endAddress: '',
		passengers: '',
	});

	useEffect(() => {
		if (findTrip !== undefined) {
			setFormData({
				id: findTrip.id,
				startAddress: findTrip.startAddress,
				endAddress: findTrip.endAddress,
				passengers: findTrip.passengers,
				model: findTrip.modelId,
			});
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
			formData.passengers === findTrip.passengers
		) {
			alert('No changes were made');
			return false;
		}
		dispatch({ type: 'GET_TRIPS', payload: [] });
		dispatch({ type: 'FIND_TRIP', payload: [] });
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
			{findTrip === undefined ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
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
										sx={{ height: 25, width: 75 }}
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
								<Grid item>
									{showCar ? (
										<Makes
											formData={formData}
											setFormData={setFormData}
										/>
									) : null}
								</Grid>
								<Grid item>
									{showCar ? (
										<Years
											formData={formData}
											setFormData={setFormData}
										/>
									) : null}
								</Grid>
								<Grid item>
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

					<Box>
						<Box m={2}>
							<DisplayTrip trip={findTrip} />
						</Box>

						<Box m={2}>
							<Button
								size='large'
								onClick={() => history.push('/history')}
								sx={{ width: 110 }}
								variant='contained'
								startIcon={<HistoryIcon />}
							>
								History
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default EditTrip;
