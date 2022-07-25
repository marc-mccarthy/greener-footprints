import { Box } from '@mui/material';
import {
	useJsApiLoader,
	GoogleMap,
	Autocomplete,
	DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 36.090794, lng: -115.183952 }; // ALLEGIANT STADIUM. Go Raiders!

const mapContainerStyle = {
    height: '100%',
    width: '100%',
	borderRadius: '40px',
	border: '1px solid #ccc',
	boxShadow: '10px 10px 10px #ccc',
	position: 'relative',
    padding: '2px',
};

const libraries = ['places'];

function DisplayMap({ getMap, center, options, zoom }) {
	const { isLoaded } = useJsApiLoader({
		libraries,
	});

	return (
		<Box
			mr={10}
			style={{ height: '50vh', width: '40vw' }}
		>
			{/* Google Map Box */}
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={zoom}
				options={options}
			>
				{getMap && <DirectionsRenderer directions={getMap} />}
			</GoogleMap>
		</Box>
	);
}

DisplayMap.defaultProps = {
	center: center,
	zoom: 18,
	mapContainerStyle: {
		width: '100%',
		height: '100%',
	},
	options: {
		zoomControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		fullscreenControl: false,
		position: google.maps.ControlPosition.RIGHT_CENTER,
	},
};

export default DisplayMap;
