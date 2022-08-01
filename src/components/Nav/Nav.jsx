import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Typography, Box, Stack} from '@mui/material';
import './Nav.css';
import {useSelector, useDispatch} from 'react-redux';
import logo1 from '../../images/co2-logo.png';
import logo2 from '../../images/react-logo.png';

function Nav(props) {
    const user=useSelector((store) => store.user);
    const dispatch=useDispatch();

    return (
        <Box className="nav">
            <Stack ml={1} direction='row' spacing={1} justifyContent="center"
                alignItems="center">
                <Link to="/user">
                    <Avatar
                        sx={{width: 42, height: 42}}
                        variant="rounded"
                        alt={user.name}
                        src={user.avatar}
                    />
                </Link>
                <Link to="/newtrip">
                    <Typography ml={2} variant="h5" color="#fff">
                        Know your <img src={logo1} className="Nav-logo" alt="co2-logo" /> so you can <img src={logo2} className="Nav-logo" alt="react-logo" /> accordingly
                    </Typography>
                </Link>
            </Stack>
            <Typography variant='h5'>
                <Stack ml={1} direction='row' justifyContent="center" alignItems="center">
                    {/* If a user is logged in, show these links */}
                    {user.id&&(
                        <>
                            <Link className="navLink" to="/user">
                                Home
                            </Link>
                            <Link className="navLink" to="/newtrip">
                                New Trip
                            </Link>
                            <Link className="navLink" to="/history">
                                History
                            </Link>
                            <Link className="navLink" to="/charts">
                                Charts
                            </Link>
                        </>
                    )}
                    <Link className="navLink" to="/info">
                        Info
                    </Link>
                    <Link className="navLink" to="/about">
                        About
                    </Link>
                    {user.id&&(
                        <Link className="navLink" onClick={() => dispatch({type: 'LOGOUT'})}>
                            Log Out
                        </Link>
                    )}
                    {/* If no user is logged in, show these links */}
                    {!user.id&&(
                        // If there's no user, show login/registration links
                        <Link className="navLink" to="/login">
                            Login / Register
                        </Link>
                    )}
                </Stack>
            </Typography>
        </Box>
    );
}

export default Nav;
