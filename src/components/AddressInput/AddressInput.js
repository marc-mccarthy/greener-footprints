import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function AddressInput({ setStartAddress, setEndAddress }) {

	return (
		<FormControl fullWidth>
			{/* START ADDRESS */}
			<input
				type='text'
				onChange={e => setStartAddress(e.target.value)}
				placeholder='Starting Address'
			/>
			{/* END ADDRESS */}
			<input
				type='text'
				onChange={e => setEndAddress(e.target.value)}
				placeholder='Ending Address'
			/>
		</FormControl>
	);
}

export default AddressInput;
