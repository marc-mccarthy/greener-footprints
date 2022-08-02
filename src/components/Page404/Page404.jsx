import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Typography} from '@mui/material';

function Page404() {
    const history=useHistory();
    const [heading, setHeading]=useState('404: Page Not Found');

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            m={10}
        >
            <Box>
                <Typography variant="h1">{heading}</Typography>
            </Box>

            <Box mt={5}>
                <Typography variant="h3">Well, this is tough...</Typography>
            </Box>

        </Box>
    );
}

export default Page404;
