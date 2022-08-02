import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Button, Stack} from '@mui/material';
import Anonymous from '../Anonymous/Anonymous';
import forestImg from '../../images/forest-background.jpg';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const errors = useSelector(store => store.errors);
	const dispatch = useDispatch();

	const login = event => {
		event.preventDefault();

		if (username && password) {
			dispatch({
				type: 'LOGIN',
				payload: {
					username: username,
					password: password,
				},
			});
		} else {
			dispatch({ type: 'LOGIN_INPUT_ERROR' });
		}
	}; // end login

	return (
        <form style={{backgroundColor: '#DEDEDE', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='formPanel' onSubmit={login}>
			<h2>Login</h2>
			{errors.loginMessage && (
				<h3 className='alert' role='alert'>
					{errors.loginMessage}
				</h3>
			)}
			<div>
				<label htmlFor='username'>
					Username:
					<input
						type='text'
						name='username'
						required
						value={username}
						onChange={event => setUsername(event.target.value)}
					/>
				</label>
			</div>
			<div>
				<label htmlFor='password'>
					Password:
					<input
						type='password'
						name='password'
						required
						value={password}
						onChange={event => setPassword(event.target.value)}
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
                    onClick={login}
                    sx={{width: 120}}
                    variant='contained'
				>
                    Login
                </Button>
                <Anonymous />
			</Stack>

		</form>
	);
}

export default LoginForm;
