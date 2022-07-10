// Storage Reducer: will be fired on "VEHICLE_MAKES" actions
const vehicleMakes = (state = [], action) => {
	switch (action.type) {
		case 'VEHICLE_MAKES':
			return action.payload;
		default:
			return state;
	}
};

export default vehicleMakes;
