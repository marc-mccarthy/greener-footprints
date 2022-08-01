import { useSelector } from 'react-redux';

const useReduxStore = () => {
	//accesses the useSelector hook and gives back entire store
	return useSelector(store => store);
};

export default useReduxStore;
