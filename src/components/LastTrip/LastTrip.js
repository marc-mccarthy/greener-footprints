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
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Co2Icon from '@mui/icons-material/Co2';

function LastTrip(props) {
	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const trips = useSelector(store => store.getTrips);
	const lastTrip = trips.length > 0 ? trips[trips.length - 1] : undefined;
    const carbonPerPerson = (lastTrip.carbonPounds / lastTrip.passengers).toFixed(2);

	return (
		<Box className='LastTrip'>
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
					<nav aria-label='trip-details'>
						<List>
							<ListItem disablePadding>
								<ListItemIcon>
									<PlayCircleFilledIcon />
								</ListItemIcon>
								<ListItemText secondary='Starting Address:' />
								<ListItemText primary={lastTrip.startAddress} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<StopCircleIcon />
								</ListItemIcon>
								<ListItemText secondary='Ending Address' />
								<ListItemText primary={lastTrip.endAddress} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<PeopleAltIcon />
								</ListItemIcon>
								<ListItemText secondary='Passenger Count' />
								<ListItemText primary={lastTrip.passengers} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<SocialDistanceIcon />
								</ListItemIcon>
								<ListItemText secondary='Distance (mi)' />
								<ListItemText primary={lastTrip.distance} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<AccessTimeIcon />
								</ListItemIcon>
								<ListItemText secondary='Duration' />
								<ListItemText primary={lastTrip.duration} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<DirectionsCarIcon />
								</ListItemIcon>
								<ListItemText secondary='Year' />
								<ListItemText
									primary={
										lastTrip.year +
										' ' +
										lastTrip.make +
										' ' +
										lastTrip.model
									}
								/>
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<Co2Icon />
								</ListItemIcon>
								<ListItemText secondary='Carbon Total (lbs)' />
								<ListItemText primary={lastTrip.carbonPounds} />
							</ListItem>
							<Divider />
							<ListItem disablePadding>
								<ListItemIcon>
									<Co2Icon />
								</ListItemIcon>
								<ListItemText secondary='Carbon / Person (lbs)' />
								<ListItemText primary={carbonPerPerson} />
							</ListItem>
						</List>
					</nav>
				</Box>
			)}
		</Box>
	);
}

export default LastTrip;
