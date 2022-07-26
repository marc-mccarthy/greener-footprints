import {
	Box,
} from '@mui/material';
import loadingBar from '../../images/loading-bar.gif';

function LoadingBar() {

	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<img src={loadingBar} alt='loading' />
		</Box>
	);
}

export default LoadingBar;
