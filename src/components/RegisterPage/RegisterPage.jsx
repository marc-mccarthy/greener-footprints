import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
let forestImg=require('../../images/forest-background.jpg');
import {Box, Button, Stack} from '@mui/material';

function RegisterPage() {
	const history = useHistory();

	return (
        <Box style={{
            backgroundImage: `url(${forestImg})`,
            height: '90vh',
            backgroundSize: "cover",
        }}>
            <Box pt={3}>
			    <RegisterForm />
            </Box>
			<center>
				<button
					type="button"
					className="btn btn_asLink"
					onClick={() => {
						history.push('/login');
					}}
				>
					Login
				</button>
			</center>
		</Box>
	);
}

export default RegisterPage;
