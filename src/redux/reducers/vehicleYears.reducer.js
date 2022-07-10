// Storage Reducer: will be fired on "VEHICLE_YEARS" actions
const vehicleYears = (state = [], action) => {
	switch (action.type) {
		case 'VEHICLE_YEARS':
			return action.payload;
		default:
			return state;
	}
};

export default vehicleYears;
