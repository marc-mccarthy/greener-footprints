import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function Passengers({ formData, setFormData }) {

    const maxPersons = [];
	{
		for (let num = 1; num <= 8; num++) {
			maxPersons.push(
				<MenuItem key={num} value={num}>
					{num}
				</MenuItem>
			);
		}
	}

	return (
		<FormControl fullWidth>
			{/* PASSENGER COUNT */}
			<InputLabel id='make'>Passengers</InputLabel>
			<Select
				labelId='Select Passengers'
				id='passengers'
				value={formData.passengers}
				label='Passengers'
				onChange={e =>
					setFormData({ ...formData, passengers: e.target.value })
				}
			>
				{maxPersons}
			</Select>
		</FormControl>
	);
}

export default Passengers;
