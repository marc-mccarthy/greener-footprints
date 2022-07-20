import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import loadingBar from '../../images/loading-bar.gif';
import {
	Box,
	Button,
	Divider,
	FormControl,
	InputLabel,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Select,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import StartIcon from '@mui/icons-material/Start';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StopCircleIcon from '@mui/icons-material/StopCircle';

function CurrentTrip(props) {
	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	const trips = useSelector(store => store.getTrips);
	const lastTrip = trips.length > 0 ? trips[trips.length - 1] : undefined;

	const [formData, setFormData] = useState({
		startAddress: lastTrip.startAddress,
		endAddress: lastTrip.endAddress,
		passengers: lastTrip.passengers,
		make: lastTrip.make,
		year: lastTrip.year,
		model: lastTrip.model,
		userId: user.id,
	});

	return (
		<Box className='CurrentTrip'>
			{trips.length === 0 || lastTrip.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
					}}
				>
					<h3>{JSON.stringify(lastTrip)}</h3>
					<nav aria-label='trip-details'>
						<List>
							<ListItem disablePadding>
								<ListItemIcon>
									<PlayCircleFilledIcon />
								</ListItemIcon>
								<ListItemText secondary='Starting Address:' />
								<ListItemText primary={formData.startAddress} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText secondary='Ending Address' />
								<ListItemText primary='Ending Address' />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText primary='Passenger Count' />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText primary='Distance (mi)' />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText primary='Duration' />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText primary='Vehicle' />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText primary='Carbon Total (lbs)' />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText primary='Carbon Per Person (lbs)' />
							</ListItem>
						</List>
					</nav>
				</Box>
			)}
		</Box>
	);
}

export default CurrentTrip;
