import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';

function AddressInput({ formData, setFormData }) {

	return (
		<FormControl fullWidth>
			{/* START ADDRESS */}
			<TextField
				required
				autofocus
				id='start-address-input'
				label='Start Address'
				placeholder='Start Address'
				defaultValue={formData.startAddress}
				onChange={e =>
					setFormData({ ...formData, startAddress: e.target.value })
				}
			/>
			{/* END ADDRESS */}
			<TextField
				required
				id='end-address-input'
				label='End Address'
				placeholder='End Address'
				defaultValue={formData.endAddress}
				onChange={e =>
					setFormData({ ...formData, endAddress: e.target.value })
				}
			/>
		</FormControl>
	);
}

export default AddressInput;
