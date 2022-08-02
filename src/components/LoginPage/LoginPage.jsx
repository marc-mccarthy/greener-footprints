import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
let forestImg = require('../../images/forest-background.jpg');
import {Box} from '@mui/material';

function LoginPage() {
	const history = useHistory();

	return (
        <div style={{
            backgroundImage: `url(${forestImg})`,
            height: '90vh',
            backgroundSize: "cover",
        }}>
            <Box pt={3}>
			    <LoginForm />
            </Box>
			<center>
				<button
					type="button"
					className="btn btn_asLink"
					onClick={() => {
						history.push('/registration');
					}}
				>
					Register
				</button>
			</center>
		</div>
	);
}

export default LoginPage;
