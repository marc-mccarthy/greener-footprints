import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
	DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 36.090794, lng: -115.183952 };

function DisplayMap({ getMap }) {

	return (
		<div>
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
						zoom={18}
						mapContainerStyle={{ width: '100%', height: '100%' }}
						options={{
							zoomControl: false,
							streetViewControl: false,
							mapTypeControl: false,
							fullscreenControl: false,
						}}
					>
						{getMap && <DirectionsRenderer directions={getMap} />}
					</GoogleMap>
				</Box>
			</Grid>
		</div>
	);
}

export default DisplayMap;
