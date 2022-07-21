import {
	TextField,
} from '@mui/material';

function EndAddress({ formData, setFormData }) {

	return (
		<div>
			{/* END ADDRESS */}
			<TextField
				sx={{ width: 300 }}
				required
				id='end-address-input'
				label='End Address'
				placeholder='End Address'
				value={formData.endAddress}
				onChange={e =>
					setFormData({ ...formData, endAddress: e.target.value })
				}
			/>
		</div>
	);
}

export default EndAddress;
