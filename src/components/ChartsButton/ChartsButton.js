import { useHistory } from 'react-router-dom';
import {
	Button,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

function ChartsButton() {
    const history = useHistory();

	return (
		<Button
			size='large'
			onClick={() => history.push('/charts')}
			sx={{ width: 110 }}
			variant='contained'
			startIcon={<BarChartIcon />}
		>
			Charts
		</Button>
	);
}

export default ChartsButton;
