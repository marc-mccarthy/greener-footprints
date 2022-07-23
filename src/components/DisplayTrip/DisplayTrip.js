import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Co2Icon from '@mui/icons-material/Co2';

function DisplayTrip({ trip }) {

	const carbonPerPerson = (
		trip.carbonPounds / trip.passengers
	).toFixed(2);

	return (
		<Box
			ml={10}
			className='DisplayTrip'
			style={{ height: '60vh', width: '40vw' }}
			sx={{
				bgcolor: 'background.paper',
			}}
		>
			<nav aria-label='trip-details'>
				<List
					sx={{
						bgcolor: 'background.paper',
						boxShadow: 9,
						borderRadius: 10,
						p: 2,
					}}
				>
					<ListItem disablePadding>
						<ListItemIcon>
							<PlayCircleFilledIcon />
						</ListItemIcon>
						<ListItemText
							primary={trip.startAddress}
							secondary='Starting Address'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<StopCircleIcon />
						</ListItemIcon>
						<ListItemText
							primary={trip.endAddress}
							secondary='Ending Address'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<PeopleAltIcon />
						</ListItemIcon>
						<ListItemText
							primary={trip.passengers}
							secondary='Passenger Count'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<SocialDistanceIcon />
						</ListItemIcon>
						<ListItemText
							primary={trip.distance}
							secondary='Distance (mi)'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<AccessTimeIcon />
						</ListItemIcon>
						<ListItemText
							primary={trip.duration}
							secondary='Duration'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<DirectionsCarIcon />
						</ListItemIcon>
						<ListItemText
							primary={
								trip.year + ' ' + trip.make + ' ' + trip.model
							}
							secondary='Year'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<Co2Icon />
						</ListItemIcon>
						<ListItemText
							primary={trip.carbonPounds}
							secondary='Carbon Total (lbs)'
						/>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemIcon>
							<Co2Icon />
						</ListItemIcon>
						<ListItemText
							primary={carbonPerPerson}
							secondary='Carbon / Person (lbs)'
						/>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}

export default DisplayTrip;
