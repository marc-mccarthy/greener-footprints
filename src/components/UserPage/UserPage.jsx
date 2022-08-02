import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
    Box,
    Button,
    Grid,
} from '@mui/material';
import AvatarUpload from '../AvatarUpload/AvatarUpload';
import Comparison from '../Comparison/Comparison';
import LoadingBar from '../LoadingBar/LoadingBar';
import SendIcon from '@mui/icons-material/Send';

function UserPage() {
    // PAGE LOAD
    useEffect(() => {
        dispatch({type: 'GET_TRIPS_SAGA'});
    }, []);

    const history=useHistory();
    const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
    const userNumber=user.role===0 ? 'Standard User':'Admin';
    const trips = useSelector((store) => store.getTrips);

	return (
        <Box>
            {trips.length === 0 ? (
                <Box mt={25} display='flex' justifyContent='center' alignItems='center'>
					<LoadingBar />
				</Box>
            ) : (
                <Box display="flex" alignItems='center'>
                    <Grid m={0} container align='center'>
                        <Grid item xs={12}>
                            <Box>
                                <h2>Welcome, {user.username}!</h2>
                            </Box>
                                <Box mt={-2}>
                                    <h4>{userNumber}</h4>
                                </Box>
                            <Box>
                                <AvatarUpload user={user} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid mt={10} container>
                        <Comparison trips={trips} />
                            <Grid mt={5} container justifyContent="center">
                                <Button
                                    size='large'
                                    onClick={() => history.push('/newtrip')}
                                    sx={{width: 170}}
                                    variant='contained'
                                    startIcon={<SendIcon />}
                                >
                                    Be Worse?
                                </Button>
                            </Grid>

                    </Grid>
                </Box>
            )}
        </Box>
    );
}

export default UserPage;
