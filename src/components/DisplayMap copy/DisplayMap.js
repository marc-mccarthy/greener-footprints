import { useState, useEffect, useRef } from 'react';
import {
	Box,
	Button,
    ButtonGroup,
    Grid,
	IconButton,
	Input,
    Stack,
	TextField,
} from '@mui/material';
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
	DirectionsRenderer,
} from '@react-google-maps/api';
import RoundaboutLeftIcon from '@mui/icons-material/RoundaboutLeft';
import ClearIcon from '@mui/icons-material/Clear';

const center = { lat: 51.47, lng: 0.45 };

function DisplayMap() {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
		libraries: ['places'],
	});

	const [map, setMap] = useState(/** @type google.maps.Map */ (null));
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState('');
	const [duration, setDuration] = useState('');

	/** @type React.MutableRefObject<HTMLInputElement> */
	const originRef = useRef();
	/** @type React.MutableRefObject<HTMLInputElement> */
	const destiantionRef = useRef();

	if (!isLoaded) {
		return <h3>Loading...</h3>;
	}

	async function calculateRoute() {
		if (
			originRef.current.value === '' ||
			destiantionRef.current.value === ''
		) {
			return;
		}
        console.log(originRef.current.value)
        console.log(destiantionRef.current.value)
		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: originRef.current.value,
			destination: destiantionRef.current.value,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
	}

	function clearRoute() {
		setDirectionsResponse(null);
		setDistance('');
		setDuration('');
		originRef.current.value = '';
		destiantionRef.current.value = '';
	}

	return (
		<Grid
			position='relative'
			flexDirection='column'
			alignItems='center'
			style={{ height: '100vh', width: '100%' }}
		>
			<Box style={{ height: '100vh', width: '100%' }}>
				{/* Google Map Box */}
				<GoogleMap
					center={center}
					zoom={15}
					mapContainerStyle={{ width: '100%', height: '100%' }}
					options={{
						zoomControl: false,
						streetViewControl: false,
						mapTypeControl: false,
						fullscreenControl: false,
					}}
					onLoad={map => setMap(map)}
				>
					<Marker position={center} />
					{directionsResponse && (
						<DirectionsRenderer directions={directionsResponse} />
					)}
				</GoogleMap>
			</Box>
			<Box
				p={4}
				borderRadius='lg'
				m={4}
				bgColor='white'
				shadow='base'
				minW='container.md'
				zIndex='1'
			>
				<Stack spacing={2} justifyContent='space-between'>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input
								type='text'
								placeholder='Starting Address'
								inputRef={originRef}
							/>
						</Autocomplete>
					</Box>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input
								type='text'
								placeholder='Ending Address'
								inputRef={destiantionRef}
							/>
						</Autocomplete>
					</Box>

					<ButtonGroup>
						<Button type='submit' onClick={calculateRoute}>
							Calculate Route
						</Button>
						<IconButton
							aria-label='center back'
							icon={<ClearIcon />}
							onClick={clearRoute}
						/>
					</ButtonGroup>
				</Stack>
				<Stack spacing={4} mt={4} justifyContent='space-between'>
					<h3>Distance: {distance} </h3>
					<h3>Duration: {duration} </h3>
					<IconButton
						aria-label='center back'
						icon={<RoundaboutLeftIcon />}
						onClick={() => {
							map.panTo(center);
							map.setZoom(15);
						}}
					/>
				</Stack>
			</Box>
		</Grid>
	);
}

export default DisplayMap;
