// Storage Reducer: will be fired on "GET_MAP" actions
const newAvatar = (state = {}, action) => {
	switch (action.type) {
		case 'NEW_AVATAR':
			return action.payload;
		default:
			return state;
	}
};

export default newAvatar;
