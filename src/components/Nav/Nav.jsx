import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import logo1 from '../../logos/co2-logo.png';
import logo2 from '../../logos/react-logo.png';

function Nav() {
	const user = useSelector((store) => store.user);

	return (
		<div className="nav">
			<Link to="/home">
				<h2 className="nav-title">Prime Solo Project</h2>
                <h3>Know your <img src={logo1} className="Nav-logo" alt="co2-logo" /> so you can <img src={logo2} className="Nav-logo" alt="react-logo" /> accordingly</h3>
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

						<Link className="navLink" to="/calculate">
							Calculate
						</Link>

						<Link className="navLink" to="/info">
							Info Page
						</Link>

						<LogOutButton className="navLink" />
					</>
				)}

				<Link className="navLink" to="/about">
					About
				</Link>
			</div>
		</div>
	);
}

export default Nav;
