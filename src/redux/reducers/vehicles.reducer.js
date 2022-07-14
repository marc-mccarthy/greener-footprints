// Storage Reducer: will be fired on "VEHICLE_MAKES" actions
const vehicles = (state = [], action) => {
    console.log('VEHICLES REDUCER', action.payload);
	switch (action.type) {
		case 'VEHICLES':
			return action.payload;
		default:
			return state;
	}
};

export default vehicles;
