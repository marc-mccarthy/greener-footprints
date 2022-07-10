// Storage Reducer: will be fired on "VEHICLE_MODELS" actions
const vehicleModels = (state = [], action) => {
	switch (action.type) {
		case 'VEHICLE_MODELS':
			return action.payload;
		default:
			return state;
	}
};

export default vehicleModels;
