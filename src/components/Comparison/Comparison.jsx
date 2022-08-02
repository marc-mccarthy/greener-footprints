import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Button, Grid, Typography} from '@mui/material';
let footballImg=require('../../images/football.png');
let toiletImg=require('../../images/toilet.png');
let octopusImg=require('../../images/octopus.png');
let beerKegImg=require('../../images/beer.png');
let grandPianoImg=require('../../images/piano.png');
let tyrannosaurusRexImg=require('../../images/trex.png');
let spaceShuttleImg=require('../../images/shuttle.png');
let blueWhaleImg=require('../../images/whale.png');

function Comparison({trips}) {
    const history=useHistory();
    const [heading, setHeading]=useState('404: Page Not Found');

    let totalCarbonPounds=0;
    trips.forEach(trip => {
        totalCarbonPounds+=trip.carbonPounds;
    });
    let cleanPounds=Number(totalCarbonPounds.toFixed(0)).toLocaleString("en-us");

    const football=0.9;
    const toilet=96.10
    const octopus=110;
    const beerKeg=160.5;
    const grandPiano=990;
    const tyrannosaurusRex=19400;
    const spaceShuttle=160000;
    const blueWhale=310000;

    function toWeight(pounds, thing) {
        const weight=pounds/thing;
        const formattedWeight=Number(weight.toFixed(2)).toLocaleString("en-us")
        return formattedWeight;
    }

    return (
        <Grid container flexDirection="column" justifyContent='flex-start'>
            <Grid m={1} mb={6} item>
                <Box>
                    <Typography color="primary" variant="h4">You've launched {cleanPounds} pounds of CO2 into the Atmosphere!</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography color="secondary" variant="h6"><img className='comp-img' src={footballImg} alt='football' /> That's {toWeight(totalCarbonPounds, football)} footballs Tom Brady can't deflate.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography variant="h6"><img className='comp-img' src={toiletImg} alt='toilet' /> That's {toWeight(totalCarbonPounds, toilet)} toilets with poop in them for goodness sake.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography color="secondary" variant="h6"><img className='comp-img' src={octopusImg} alt='octopus' /> That's {toWeight(totalCarbonPounds, octopus)} innocent Octopuses, you jerk.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography variant="h6"><img className='comp-img' src={beerKegImg} alt='beerKeg' /> That's {toWeight(totalCarbonPounds, beerKeg)} precious kegs of beer we could smash.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography color="secondary" variant="h6"><img className='comp-img' src={grandPianoImg} alt='grandPiano' /> That's {toWeight(totalCarbonPounds, grandPiano)} of your Grandmother's grand pianos.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography variant="h6"><img className='comp-img' src={tyrannosaurusRexImg} alt='tyrannosaurusRex' /> That's {toWeight(totalCarbonPounds, tyrannosaurusRex)} Tyrannosaurus Rex's like it's literally nothing.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography color="secondary" variant="h6"><img className='comp-img' src={spaceShuttleImg} alt='spaceShuttle' /> That's {toWeight(totalCarbonPounds, spaceShuttle)} of Elon's space shuttles so we can't escape your rage.</Typography>
                </Box>
            </Grid>
            <Grid m={1} item>
                <Box>
                    <Typography variant="h6"><img className='comp-img' src={blueWhaleImg} alt='blueWhale' /> That's {toWeight(totalCarbonPounds, blueWhale)} Blue Whales dude. Yep, Blue Whales.</Typography>
                </Box>
            </Grid>


        </Grid>
    );
}

export default Comparison;
