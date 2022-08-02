import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {
    Box,
    Grid,
} from '@mui/material';
import AvatarUpload from '../AvatarUpload/AvatarUpload';
import Comparison from '../Comparison/Comparison';
import LoadingBar from '../LoadingBar/LoadingBar';

function UserPage() {
    // PAGE LOAD
    useEffect(() => {
        dispatch({type: 'GET_TRIPS_SAGA'});
    }, []);

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
                <Box className="container" display="flex" alignItems='center'>
                    <Grid m={0} container align='center'>
                        <Grid item xs={12}>
                            <Box>
                                <h2>Welcome, {user.username}!</h2>
                            </Box>
                            <Box>
                                <AvatarUpload user={user} />
                            </Box>
                            <Box>
                                <h4>You are logged in as a {userNumber}</h4>
                            </Box>
                        </Grid>
                    </Grid>
                    <Comparison trips={trips} />
                </Box>
            )}
        </Box>
    );
}

export default UserPage;
