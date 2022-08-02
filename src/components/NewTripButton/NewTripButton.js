import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function NewTripButton() {
	const history = useHistory();

	return (
		<Button
			size='large'
			onClick={() => history.push('/newtrip')}
			sx={{ width: 110 }}
			variant='contained'
			startIcon={<SendIcon />}
		>
			Trip
		</Button>
	);
}

export default NewTripButton;
