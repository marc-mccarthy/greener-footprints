import { useSelector } from 'react-redux';
import {
    Box,
    FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

function Models({ formData, setFormData }) {

    const models = useSelector(store => store.models);

    const modelsChange = e => {
        setFormData({
			...formData,
			model: e.target.value,
		});
        console.log('MODEL:', e.target.value)
	};

	return (
		<Box>
            <FormControl>
                {/* VEHICLE MODELS */}
                <InputLabel id='make'>Model</InputLabel>
                <Select
                    sx={{ width: 175 }}
                    labelId='Select Model'
                    id='model'
                    value={formData.model}
                    label='Model'
                    onChange={modelsChange}
                >
                    {models.map(model => (
                        <MenuItem key={model.data.id} value={model.data.id}>
                            {model.data.attributes.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
		</Box>
	);
}

export default Models;
