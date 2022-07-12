import getTripsSaga from "../sagas/getTrips.saga";

// Storage Reducer: will be fired on "GET_TRIPS" actions
const getTrips = (state = [], action) => {
    console.log(action.payload);
	switch (action.type) {
		case 'GET_TRIPS':
			return action.payload;
		default:
			return state;
	}
};

export default getTrips;
