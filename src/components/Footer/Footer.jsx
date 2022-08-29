import {Box, Stack} from '@mui/material';
const footprint=require('../../images/carbon-footprint.png');

let year = new Date().getFullYear();

function Footer() {
    return (
        <Stack
            className="footer"
            spacing={3}
            direction="row"
            justifyContent="center"
        >
            <img src={footprint} height="25px" alt="footprint" />
            <p>
                &copy; {year} - Greener Foot(prints): Road Trip
                Edition by Marc McCarthy
            </p>
            <img src={footprint} height="25px" alt="footprint" />
        </Stack>
    );
}

export default Footer;
