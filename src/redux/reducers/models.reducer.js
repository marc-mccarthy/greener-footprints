// Storage Reducer: will be fired on "MODELS" actions
const models = (state = [], action) => {
	switch (action.type) {
		case 'MODELS':
			return action.payload;
		default:
			return state;
	}
};

export default models;
