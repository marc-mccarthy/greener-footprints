import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
	const [heading, setHeading] = useState('Welcome to Greener Foot(prints): Road Trip Edition');
	const history = useHistory();

	const onLogin = (event) => {
		history.push('/login');
	};

	return (
		<div className="container">
			<h2>{heading}</h2>

			<div className="grid">
				<div className="grid-col grid-col_8">
					<p>
                        This is an exploration into understanding what really comes out of those tailpipes every time we get behind the wheel. What is that six inches of black smoke before it dissipates into perceivably nothing? How is it measured? Does anyone have reliable information as to what the impact is?
					</p>

					<p>
                        These are big questions and beyond this scope, however, my goal is to help start the journey by showing you a measurement we all understand, pounds. Carbon pounds for gasoline are measured after it has burnt where each carbon atom attaches with two oxygen atoms. The oxygen is the heaviest weight of the pair and gives the emission more weight than prior to your station fill up. Simply, one gallon of gasoline weighs approximately 6.25 lbs. One gallon of emitted gasoline weighs 19.3 lbs.
					</p>

					<p>
                        A gallon of liquid gasoline is much lighter than the equivalent, emitted version that comes out of the backend. Roughly 3.7x the weight. This app will allow you to see how much carbon is emitted from your specific vehicle with your provided trip route. This is a simple way to understand the carbon footprint of your vehicle with trips and measurements we make on a daily basis!
					</p>
                    <h4>
                        This app is currently being worked on so not all features may be implemented yet. Stay tuned!
                    </h4>
                    <p>
                        Please register or login. If you are a new user, you will be prompted to create an account. If you are an existing user, you will be prompted to login. This database is wiped frequently as it is not meant to be stored long term until everything is fully built, and ready for production.
                    </p>
				</div>
				<div className="grid-col grid-col_4">
					<RegisterForm />

					<center>
						<h4>Already a Member?</h4>
						<button className="btn btn_sizeSm" onClick={onLogin}>
							Login
						</button>
					</center>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
