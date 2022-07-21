import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Typography } from '@mui/material';
import './Nav.css';
import { useSelector } from 'react-redux';
import logo1 from '../../images/co2-logo.png';
import logo2 from '../../images/react-logo.png';
import DeleteIcon from '@mui/icons-material/Delete';

function Nav(props) {
	const user = useSelector((store) => store.user);

	return (
		<div className="nav">
			<Link to="/home">
                <Typography variant="h5" color="#fff">
                    Know your <img src={logo1} className="Nav-logo" alt="co2-logo" /> so you can <img src={logo2} className="Nav-logo" alt="react-logo" /> accordingly
                </Typography>
			</Link>
			<div>
				{/* If no user is logged in, show these links */}
				{!user.id && (
					// If there's no user, show login/registration links
					<Link className="navLink" to="/login">
						Login / Register
					</Link>
				)}
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
                        <Link className="navLink" to="/map">
                            Map
                        </Link>
						<LogOutButton className="navLink" />
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
			</div>
		</div>
	);
}

export default Nav;
