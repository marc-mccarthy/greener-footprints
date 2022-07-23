import { Box, TextField } from '@mui/material';
import {
	Autocomplete,
} from '@react-google-maps/api';

function StartAddress({ formData, setFormData }) {

	return (
		<Box>
			{/* START ADDRESS */}

			<TextField
				size='small'
				sx={{ width: 260 }}
				required
				autoFocus
				id='start-address-input'
				label='Start Address'
				placeholder='Start Address'
				value={formData.startAddress}
				onChange={e =>
					setFormData({
						...formData,
						startAddress: e.target.value,
					})
				}
			/>
		</Box>
	);
}

export default StartAddress;
