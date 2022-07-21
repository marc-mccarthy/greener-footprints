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

function EditTrip(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch({ type: 'FIND_TRIP_SAGA', payload: id });
	}, []);

    const [showCar, setShowCar] = useState(false);
	const { id } = useParams();
	const user = useSelector(store => store.user);
	const foundTrip = useSelector(store => store.findTrip[0]);

	const [formData, setFormData] = useState({
		startAddress: '',
		endAddress: '',
		passengers: '',
	});

	useEffect(() => {
		if (foundTrip !== undefined) {
			setFormData({
                id: foundTrip.id,
				startAddress: foundTrip.startAddress,
				endAddress: foundTrip.endAddress,
				passengers: foundTrip.passengers,
                model: foundTrip.modelId,
			});
		}
	}, [foundTrip]);

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
		console.log(formData.model);
		for (let key in formData) {
			if (formData[key] === '') {
				alert('Please fill out all fields');
				return false;
			}
		}
		dispatch({ type: 'UPDATE_TRIP_SAGA', payload: { id: formData.id, startAddress: formData.startAddress, endAddress: formData.endAddress, passengers: formData.passengers, model: formData.model }});
	};

	return (
		<Box className='EditTrip'>
			{foundTrip === undefined ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box>
					<Box m={3}>
						<Typography variant='h4' color='primary' align='center'>
							Edit Trip
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
							<Grid
								container
								spacing={2}
								mb={3}
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
									) : (
										<div></div>
									)}
								</Grid>
								<Grid item>
									{showCar ? (
										<Years
											formData={formData}
											setFormData={setFormData}
										/>
									) : (
										<div></div>
									)}
								</Grid>
								<Grid item>
									{showCar ? (
										<Models
											formData={formData}
											setFormData={setFormData}
										/>
									) : (
										<div></div>
									)}
								</Grid>
								<Grid item>
                                    {showCar ? (
                                        <div></div>
                                    ) : (
                                        <Button
                                            size='medium'
                                            onClick={showCarInfo}
                                            sx={{ height: 45, width: 145 }}
                                            variant='contained'
                                        >
                                            Change Car
									    </Button>
                                    )}
								</Grid>
							</Grid>
						</Grid>
					</Box>

					<Box m={3}>
						<Box m={3}>
							<Typography
								variant='h5'
								color='primary'
								align='center'
							>
								Current Trip
							</Typography>
						</Box>

						<Box m={3}>
							<h4>{JSON.stringify(foundTrip)}</h4>
						</Box>

						<Box m={3}>
							<Button
								size='small'
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
