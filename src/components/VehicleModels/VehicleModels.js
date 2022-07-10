import { useSelector } from 'react-redux';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function VehicleModels({ formData, setFormData }) {

    const vehicleModels = useSelector(store => store.vehicleModels);

    const vehicleModelsChange = e => {
        setFormData({
			...formData,
			vehicleModel: e.target.value,
		});
        console.log('VEHICLE MODEL:', e.target.value)
	};

	return (
		<FormControl fullWidth>
			{/* VEHICLE MODELS */}
			<InputLabel id='make'>Model</InputLabel>
			<Select
				labelId='Select Model'
				id='model'
				value={formData.vehicleModel}
				label='Model'
				onChange={vehicleModelsChange}
			>
				{vehicleModels.map(model => (
					<MenuItem key={model.data.id} value={model.data.id}>
						{model.data.attributes.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default VehicleModels;
