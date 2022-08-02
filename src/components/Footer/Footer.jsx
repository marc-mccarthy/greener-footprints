import {Box, Stack} from '@mui/material';
const footprint = require('../../images/carbon-footprint.png');

function Footer() {
    return (
        <Box>
            <Stack className='footer' spacing={3} direction='row' justifyContent='center' alignItems='center'>
                <img src={footprint} height='25px' alt='footprint'/>
                <p>
                    &copy; Greener Foot(prints): Road Trip Edition by Marc McCarthy
                </p>
                <img src={footprint} height='25px' alt='footprint' />
            </Stack>
        </Box>
    )
}

export default Footer;
