import { Box, TextField } from '@mui/material';

function StartAddress({ formData, setFormData }) {

	return (
		<Box>
			{/* START ADDRESS */}
			<TextField
				sx={{ width: 275 }}
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
