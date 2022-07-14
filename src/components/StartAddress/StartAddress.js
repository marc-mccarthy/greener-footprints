import {
	TextField,
} from '@mui/material';

function StartAddress({ formData, setFormData }) {

	return (
		<div>
			{/* START ADDRESS */}
			<TextField
				sx={{ width: 300 }}
				required
				autofocus
				id='start-address-input'
				label='Start Address'
				placeholder='Start Address'
				defaultValue={formData.startAddress}
				onChange={e =>
					setFormData({
						...formData,
						startAddress: e.target.value,
					})
				}
			/>
		</div>
	);
}

export default StartAddress;
