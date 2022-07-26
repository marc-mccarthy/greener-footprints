import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import logo1 from '../../images/co2-logo.png';
import logo2 from '../../images/react-logo.png';

function Nav(props) {
	const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

	return (
		<Box className="nav">
			<Link to="/home">
                <Typography ml={2} variant="h5" color="#fff">
                    Know your <img src={logo1} className="Nav-logo" alt="co2-logo" /> so you can <img src={logo2} className="Nav-logo" alt="react-logo" /> accordingly
                </Typography>
			</Link>
			<Box>
				{/* If a user is logged in, show these links */}
				{user.id && (
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
                <Link className="navLink" to="/docs">
                    Docs
                </Link>
                <Link className="navLink" to="/info">
                    Info Page
                </Link>
				<Link className="navLink" to="/about">
					About
				</Link>
                {user.id &&(
                    <>
                        <Link className="navLink" onClick={() => dispatch({type: 'LOGOUT'})}>
                            Log Out
                        </Link>
                    </>
                )}
                {/* If no user is logged in, show these links */}
                {!user.id&&(
                    // If there's no user, show login/registration links
                    <Link className="navLink" to="/login">
                        Login / Register
                    </Link>
                )}
			</Box>
		</Box>
	);
}

export default Nav;
