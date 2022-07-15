// Storage Reducer: will be fired on "MAKES" actions
const makes = (state = [], action) => {
	switch (action.type) {
		case 'MAKES':
			return action.payload;
		default:
			return state;
	}
};

export default makes;
