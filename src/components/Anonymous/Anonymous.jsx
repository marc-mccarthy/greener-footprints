import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

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
	};

	return (
        <Button sx={{width: 120}} variant='outlined' onClick={login}>
            Anonymous
        </Button>
	);
}

export default Anonymous;
