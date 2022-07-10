import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function Passengers({ passengers, setPassengers }) {

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
				value={passengers}
				label='Passengers'
				onChange={e => setPassengers(e.target.value)}
			>
				{maxPersons}
			</Select>
		</FormControl>
	);
}

export default Passengers;
