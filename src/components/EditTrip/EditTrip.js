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

function EditTrip(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        dispatch({ type: 'EDIT_TRIP_SAGA', payload: id });
    }, []);

    const user = useSelector(store => store.user);
    const editTrip = useSelector(store => store.editTrip);

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
        dispatch({ type: 'EDIT_TRIP', payload: formData });
    }

	return (
		<Box className='EditTrip'>
			{editTrip.length === 0 ? (
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
							<h3>{JSON.stringify(editTrip)}</h3>
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
				</Box>
			)}
		</Box>
	);
}

export default EditTrip;
