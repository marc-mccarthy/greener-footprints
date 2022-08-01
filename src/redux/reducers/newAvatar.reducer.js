// Storage Reducer: will be fired on "GET_MAP" actions
const newAvatar = (state = {}, action) => {
	switch (action.type) {
		case 'NEW_AVATAR':
            console.log('NEW_AVATAR REDUCER VALUE:', action.payload);
			return action.payload;
		default:
			return state;
	}
};

export default newAvatar;
