import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

function Anonymous() {

	const dispatch = useDispatch();

	const login = event => {
		event.preventDefault();
        dispatch({
            type: 'LOGIN',
            payload: {
                username: 'anonymous',
                password: 'anonymous',
            },
        });
	}; // end anonymous login

	return (
        <Button sx={{width: 120}} variant='outlined' onClick={login}>
            Anonymous
        </Button>
	);
}

export default Anonymous;
