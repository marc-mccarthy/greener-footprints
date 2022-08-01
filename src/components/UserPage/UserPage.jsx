import { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    Grid,
} from '@mui/material';
import AvatarUpload from '../AvatarUpload/AvatarUpload';

function UserPage() {

	const user = useSelector((store) => store.user);
    const userNumber=user.role===0? 'Standard User':'Admin';

	return (
		<Box className="container">
            <Grid container align='center'>
                <Grid item xs={12}>
                    <Box>
                        <h2>Welcome, {user.username}!</h2>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <AvatarUpload user={user}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <h4>You are logged in as a {userNumber}</h4>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <h5>**Not much here at the moment**</h5>
                        <h5>Feel free to start exploring the pages in the navigation above.</h5>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

// this allows us to use <App /> in index.js
export default UserPage;
