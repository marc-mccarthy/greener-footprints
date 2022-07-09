const vehicleMakes = (state = [], action) => {
    switch (action.type) {
		case 'VEHICLE_MAKES':
			return action.payload;
		default:
			return state;
    }
};

export default vehicleMakes;
