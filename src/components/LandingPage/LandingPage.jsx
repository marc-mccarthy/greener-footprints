import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Button, Divider, Stack, Typography} from '@mui/material';
import './LandingPage.css';
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
    const history=useHistory();
    const [heading, setHeading]=useState('Welcome to Greener Foot(prints): Road Trip Edition');

    return (
        <div className="container">
            <h2>{heading}</h2>
            <div className="grid">
                <div className="grid-col grid-col_8">
                    <Typography variant="body1">
                        This is an exploration into understanding what really comes out of those tailpipes every time we get behind the wheel. What is that six inches of black smoke before it dissipates into thin air? How is it measured and does anyone have reliable information as to what the impact is?
                    </Typography>
                    <Typography variant="body1">
                        These are questions beyond this scope, however, my goal is to help start this discovery by showing you a measurement we all understand; pounds. Carbon pounds for gasoline are measured after combustion, where each carbon atom attaches with two oxygen atoms. The oxygen is the heaviest weight of the pair and gives the emission more weight than prior to the burning. Simply, one gallon of gasoline weighs approximately 6.25 lbs while one gallon of the emission equivalents weighs approximately 19.3 lbs.
                    </Typography>
                    <Typography variant="body1">
                        This app will allow you to see how much carbon is emitted from your specific vehicle with your provided trip route. It also will not hold you accountable for the emissions of your passengers! This is a simple way to understand the carbon footprint of your vehicle with trips and measurements we make on a daily basis!
                    </Typography>
                    <Typography variant="h6">
                        Choose the 'Anonymous' user option for pre-populated trip data if you don't want to make your own. This app is currently being worked on so not all features may be implemented yet. Stay tuned!
                    </Typography>
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
