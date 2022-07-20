import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	Box,
	Button,
	FormControl,
    Grid,
    Typography,
} from '@mui/material';
import loadingBar from '../../images/loading-bar.gif';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';
import CurrentTrip from '../CurrentTrip/CurrentTrip';
import HistoryIcon from '@mui/icons-material/History';


function EditTrip(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(store => store.user);
    const trips = useSelector(store => store.getTrips);
    const editTrip = trips.find(trip => trip.id === Number(id));

    const [formData, setFormData] = useState({
		id: id,
		startAddress: '',
		endAddress: '',
		passengers: '',
		make: '',
		year: '',
		model: '',
		userId: user.id,
	});

    useEffect(() => {
        dispatch({ type: 'GET_TRIPS_SAGA' });
    }, []);

    useEffect(() => {
		if (editTrip !== undefined) {
			setFormData({
				id: id,
				startAddress: editTrip.startAddress,
                endAddress: editTrip.endAddress,
                passengers: editTrip.passengers,
                make: '',
                year: '',
                model: '',
                userId: user.id,
			});
		}
	}, [editTrip]);

    const readySetGo = () => {
		console.log(formData)
		for (let key in formData) {
			if (formData[key] === '') {
				alert('Please fill out all fields');
				return false;
			}
		}
		dispatch({ type: 'EDIT_TRIP', payload: formData });
	}

	return (
		<Box className='EditTrip'>
			{trips.length === 0 || editTrip === undefined ? (
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
                            <h4>{JSON.stringify(editTrip)}</h4>
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
