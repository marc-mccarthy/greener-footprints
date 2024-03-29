// Storage Reducer: will be fired on "GET_TRIPS" actions
const getTrips = (state = [], action) => {
	switch (action.type) {
		case 'GET_TRIPS':
			return action.payload;
		default:
			return state;
	}
};

export default getTrips;
