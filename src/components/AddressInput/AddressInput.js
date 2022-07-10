import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function AddressInput({ formData, setFormData }) {

	return (
		<FormControl fullWidth>
			{/* START ADDRESS */}
			<input
				type='text'
				onChange={e =>
					setFormData({ ...formData, startAddress: e.target.value })
				}
				placeholder='Starting Address'
			/>
			{/* END ADDRESS */}
			<input
				type='text'
				onChange={e =>
					setFormData({ ...formData, endAddress: e.target.value })
				}
				placeholder='Ending Address'
			/>
		</FormControl>
	);
}

export default AddressInput;
