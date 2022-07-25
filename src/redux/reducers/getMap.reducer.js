// Storage Reducer: will be fired on "GET_MAP" actions
console.log('GET_MAP.REDUCER:', getMap);
const getMap = (state = {}, action) => {
	switch (action.type) {
		case 'GET_MAP':
			return action.payload;
		default:
			return state;
	}
};

export default getMap;
