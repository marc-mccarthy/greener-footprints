import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Box, Button, Divider, Stack} from '@mui/material';
import './LandingPage.css';
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
    const history=useHistory();
	const [heading, setHeading] = useState('Welcome to Greener Foot(prints): Road Trip Edition');

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
                        Choose the 'Anonymous' user option for pre-populated trip data if you don't want to make your own. This app is currently being worked on so not all features may be implemented yet. Stay tuned!
                    </h4>
				</div>
                <Box ml={5}>
                    <Box>
                        <RegisterForm />
                    </Box>
                    <Box>
                        <h4>Already a Member?</h4>
                            <Stack divider={<Divider orientation="vertical" flexItem />} spacing={3} justifyContent='left' direction='row'>
                            <Button sx={{width: 120}} variant='contained' onClick={history.push('/login')}>
                                    Login
                                </Button>
                            </Stack>
                    </Box>
                </Box>

			</div>
		</div>
	);
}

export default LandingPage;
