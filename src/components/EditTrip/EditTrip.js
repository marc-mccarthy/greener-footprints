import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	Box,
	Button,
	FormControl,
    Grid,
    Stack,
} from '@mui/material';
import loadingBar from '../../images/loading-bar.gif';
import StartAddress from '../StartAddress/StartAddress';
import EndAddress from '../EndAddress/EndAddress';
import Passengers from '../Passengers/Passengers';
import Makes from '../Makes/Makes';
import Years from '../Years/Years';
import Models from '../Models/Models';

function EditTrip(props) {

    const { id } = useParams();

    useEffect(() => {
        console.log('EditTrip: useEffect', editTrip[0].id);
        // dispatch({ type: 'EDIT_TRIP_SAGA', payload: id });
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

	return (
        <div>
            {editTrip.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
                <div className='EditTrip'>
                    <h3>{JSON.stringify(editTrip)}</h3>
                    <div>
                        <h1>Edit Trip</h1>
                    </div>
                        <Box>
                            <FormControl>
                                <StartAddress
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <EndAddress
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <Passengers
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <Makes
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <Years
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <Models
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <Button
                                    size='large'
                                    sx={{ width: 100 }}
                                    variant='contained'
                                >
                                    Edit Trip
                                </Button>
                            </FormControl>
                        </Box>
                        <Box>
                            <h3>{JSON.stringify(editTrip)}</h3>
                        </Box>
                    </div>
                )
            }
        </div>
	);
}

export default EditTrip;
