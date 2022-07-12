import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import loadingBar from '../../images/loading-bar.gif';

const columns = [
	{ field: 'id', headerName: 'ID', width: 50 },
	{
		field: 'startAddress',
		headerName: 'Start Address',
		width: 250,
		editable: true,
	},
	{
		field: 'endAddress',
		headerName: 'End Address',
		width: 250,
		editable: true,
	},
	{
		field: 'distanceMiles',
		headerName: 'Distance (mi)',
		type: 'number',
		width: 120,
		editable: true,
	},
	{
		field: 'duration',
		headerName: 'Duration',
		width: 150,
		editable: true,
	},
	{
		field: 'passengers',
		headerName: 'Passengers',
		type: 'number',
		width: 100,
		editable: true,
	},
	{
		field: 'vehicleYear',
		headerName: 'Year',
		width: 90,
		editable: true,
	},
	{
		field: 'vehicleMake',
		headerName: 'Make',
		width: 100,
		editable: true,
	},
	{
		field: 'vehicleModel',
		headerName: 'Model',
		width: 110,
		editable: true,
	},
	{
		field: 'carbonPounds',
		headerName: 'Carbon (lbs)',
		type: 'number',
		width: 100,
		editable: true,
	},
];

function History(props) {

	useEffect(() => {
		dispatch({type: 'GET_TRIPS_SAGA', payload: { userId: user.id }});
	}, []);

    const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	const trips = useSelector(store => store.getTrips);

    const rows = trips.map(trip => {
		return {
			id: trip.id,
			startAddress: trip.startAddress,
			endAddress: trip.endAddress,
			distanceMiles: trip.distanceMiles,
			duration: trip.duration,
			passengers: trip.passengers,
			vehicleYear: trip.vehicleYear,
			vehicleMake: trip.vehicleMake,
			vehicleModel: trip.vehicleModel,
			carbonPounds: trip.carbonPounds,
		};
	});

	return (
		<div className='History'>
			<h1>History</h1>
			{trips.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box sx={{ height: 400, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={10}
						rowsPerPageOptions={[10]}
						checkboxSelection
						disableSelectionOnClick
					/>
				</Box>
			)}
		</div>
	);


}

export default History;
