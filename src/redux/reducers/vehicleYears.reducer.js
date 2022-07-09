const vehicleYears = (state = [], action) => {
    switch (action.type) {
		case 'VEHICLE_YEARS':
			return action.payload;
		default:
			return state;
    }
};

export default vehicleYears;
