import { useHistory } from 'react-router-dom';
import {
	Button,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

function HistoryButton() {

    const history = useHistory();

	return (
		<Button
			size='large'
			onClick={() => history.push('/history')}
			sx={{ width: 110 }}
			variant='contained'
			startIcon={<HistoryIcon />}
		>
			History
		</Button>
	);
}

export default HistoryButton;
