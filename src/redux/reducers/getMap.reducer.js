// Storage Reducer: will be fired on "GET_MAP" actions
const getMap = (state = {}, action) => {
	switch (action.type) {
		case 'GET_MAP':
            console.log('GET_MAP REDUCER VALUE:', action.payload);
			return action.payload;
		default:
			return state;
	}
};

export default getMap;
