// Storage Reducer: will be fired on "GET_TRIPS" actions
const editTrip = (state = [], action) => {
	switch (action.type) {
		case 'EDIT_TRIP':
			return action.payload;
		default:
			return state;
	}
};

export default editTrip;
