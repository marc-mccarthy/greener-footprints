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
		<div>
			{/* PASSENGER COUNT */}
			<InputLabel id='make'>Passengers</InputLabel>
			<Select
                sx={{ width: 150}}
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
		</div>
	);
}

export default Passengers;
