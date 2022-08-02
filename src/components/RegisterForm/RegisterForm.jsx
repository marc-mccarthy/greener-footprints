import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Stack} from '@mui/material';
import Anonymous from '../Anonymous/Anonymous';

function RegisterForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const errors = useSelector((store) => store.errors);
	const dispatch = useDispatch();

	const registerUser = (event) => {
		event.preventDefault();

		dispatch({
			type: 'REGISTER',
			payload: {
				username: username,
				password: password,
			},
		});
	}; // end registerUser

	return (
        <form style={{backgroundColor: '#DEDEDE', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="formPanel">
			<h2>Register User</h2>
			{errors.registrationMessage && (
				<h3 className="alert" role="alert">
					{errors.registrationMessage}
				</h3>
			)}
			<div>
				<label htmlFor="username">
					Username:
					<input
						type="text"
						name="username"
						value={username}
						required
						onChange={(event) => setUsername(event.target.value)}
					/>
				</label>
			</div>
			<div>
				<label htmlFor="password">
					Password:
					<input
						type="password"
						name="password"
						value={password}
						required
						onChange={(event) => setPassword(event.target.value)}
					/>
				</label>
			</div>
            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={3}
                mt={3}
            >
                <Button
                    m={3}
                    onClick={registerUser}
                    sx={{width: 120}}
                    variant='contained'
                >
                    Register
                </Button>
                <Anonymous />
            </Stack>
		</form>
	);
}

export default RegisterForm;
