import {Box, Grid, Stack, Typography} from '@mui/material';
const footprint = require('../../images/carbon-footprint.png');

function AboutPage() {
    return (
        <Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                m={5}
            >
                <Box>
                    <img src={footprint} className='foot-img' alt="carbon footprint" />
                </Box>
                <Typography variant="h4">
                    About & Acknowledgments
                </Typography>
                <Box>
                    <img src={footprint} className='foot-img' alt="carbon footprint" />
                </Box>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                m={9}
            >
                <Grid
                    container
                    justifyContent="center"
                >
                    <Grid container direction='column' xs={4}>
                        <Grid item>
                            <Typography variant="h5">
                                Major Techs Used:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                <ul>
                                    <li>
                                        <a href="https://reactjs.org/">React</a>
                                    </li>
                                    <li>
                                        <a href="https://redux.js.org/">Redux</a>
                                    </li>
                                    <li>
                                        <a href="https://redux-saga.js.org/">Redux-Saga</a>
                                    </li>
                                    <li>
                                        <a href="https://nodejs.org/en/">Node.js</a>
                                    </li>
                                    <li>
                                        <a href="https://www.postgresql.org/">PostgreSQL</a>
                                    </li>
                                    <li>
                                        <a href="https://expressjs.com/">Express.js</a>
                                    </li>
                                    <li>
                                        <a href="https://mui.com/">Material UI</a>
                                    </li>
                                    <li>
                                        <a href="https://www.passportjs.org/">Passport (Auth)</a>
                                    </li>
                                    <li>
                                        <a href="https://www.heroku.com/">Heroku</a>
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction='column' xs={4}>
                        <Grid item>
                            <Typography variant="h5">
                                Spike Techs Used:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                <ul>
                                    <li>
                                        <a href="https://aws.amazon.com/">Amazon Web Services (IAM S3 Bucket)</a>
                                    </li>
                                    <li>
                                        <a href="https://mapsplatform.google.com/">Google Maps Javascript API</a>
                                    </li>
                                    <li>
                                        <a href="https://mapsplatform.google.com/">Google Maps Directions API</a>
                                    </li>
                                    <li>
                                        <a href="https://www.carboninterface.com/">Carbon Interface API</a>
                                    </li>
                                    <li>
                                        <a href="https://www.chartjs.org/">Chart.js (react-chartjs-2)</a>
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction='column' xs={4}>
                        <Grid mb={2} item>
                            <Typography variant="h5">
                                Future To-Do's:
                            </Typography>
                        </Grid>
                        <Typography variant="h6">
                        <Grid item>
                            <Box>
                                <input type="checkbox" id="1" />
                                <label for="1">Add more Jest unit testing</label>
                            </Box>
                            <Box>
                                <input type="checkbox" id="2" />
                                <label for="2">Compare emissions from multiple vehicles</label>
                            </Box>
                            <Box>
                                <input type="checkbox" id="3" />
                                <label for="3">Add various types of travel vehicles (flight, bicycle)</label>
                            </Box>
                            <Box>
                                <input type="checkbox" id="4" />
                                <label for="4">Scale views for different viewports</label>
                            </Box>
                            <Box>
                                <input type="checkbox" id="5" />
                                <label for="5">Rebuild in React Native</label>
                            </Box>
                            <Box>
                                <input type="checkbox" id="6" />
                                <label for="6">Add dates to your travel</label>
                            </Box>
                            <Box>
                                <input type="checkbox" id="7" />
                                <label for="7">Fully host on AWS or Dokku/Digital Ocean</label>
                            </Box>
                        </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                ml={20}
                mr={20}
                width='50%'
            >
                <Stack>
                    <Typography variant="h4">
                        Acknowledgements
                    </Typography>
                    <Typography variant="body1">
                        <p>
                            I want to thank Prime and Dev for this amazing opportunity and my cohort for being the fun and energetic group of individuals who I can engage with. Of course, I'd like to thank my wife and family for allowing me to pour my time into this. It was a joy to see each of your projects and take part in your sharing of them. Thanks for listening! Now I’ll shoot it back to Dev to see where this train takes us next.
                        </p>
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

export default AboutPage;
