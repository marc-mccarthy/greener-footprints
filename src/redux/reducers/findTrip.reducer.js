// Storage Reducer: will be fired on "FIND_TRIP" actions
const findTrip = (state = {}, action) => {
	switch (action.type) {
		case 'FIND_TRIP':
            console.log('FIND_TRIP REDUCER VALUE', action.payload);
			return action.payload;
		default:
			return state;
	}
};

export default findTrip;
