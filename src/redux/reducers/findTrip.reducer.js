// Storage Reducer: will be fired on "FIND_TRIP" actions
const findTrip = (state = [], action) => {
	switch (action.type) {
		case 'FIND_TRIP':
			return action.payload;
		default:
			return state;
	}
};

export default findTrip;
