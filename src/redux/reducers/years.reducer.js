// Storage Reducer: will be fired on "YEARS" actions
const years = (state = [], action) => {
	switch (action.type) {
		case 'YEARS':
			return action.payload;
		default:
			return state;
	}
};

export default years;
