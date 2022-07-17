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
import './History.css';

function History(props) {

	useEffect(() => {
		dispatch({type: 'GET_TRIPS_SAGA', payload: { userId: user.id }});
	}, []);

    const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	const trips = useSelector(store => store.getTrips);

    const columns = [
		{
			field: 'id',
			headerName: 'ID',
			width: 50,
		},
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
			field: 'distance',
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
			field: 'year',
			headerName: 'Year',
			type: 'singleSelect',
			valueOptions: ['United Kingdom', 'Spain', 'Brazil'],
			width: 90,
			editable: true,
		},
		{
			field: 'make',
			headerName: 'Make',
			width: 130,
			editable: true,
		},
		{
			field: 'model',
			headerName: 'Model',
			width: 130,
			editable: true,
		},
		{
			field: 'carbonPounds',
			headerName: 'Carbon (lbs)',
			type: 'number',
			width: 100,
			editable: true,
		},
		{
			field: 'carbonPoundsPerson',
			headerName: 'Carbon (lbs) Passenger',
			type: 'number',
			width: 170,
			editable: false,
			valueGetter: params =>
				params.row.carbonPounds / params.row.passengers,
		},
		{
			field: 'vehicle',
			headerName: 'Vehicle',
			width: 170,
			editable: false,
			valueGetter: params =>
				`${params.row.year} ${params.row.make} ${params.row.model}`,
		},
		{
			field: 'delete',
			headerName: 'Delete',
			width: 170,
			editable: false,
			renderCell: (params) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            dispatch({type: 'DELETE_TRIP_SAGA', payload: { id: params.row.id }});
                        }}
                    >
                        Delete
                    </Button>
                );
            }
		},
	];

    const rows = trips.map(trip => {
		return {
			id: trip.id,
			startAddress: trip.startAddress,
			endAddress: trip.endAddress,
			distance: trip.distance,
			duration: trip.duration,
			passengers: trip.passengers,
			year: trip.year,
			make: trip.make,
			model: trip.model,
			carbonPounds: trip.carbonPounds,
		};
	});

    const handleDelete = (id) => {
        console.log(id);
        dispatch({ type: 'DELETE_TRIP_SAGA', payload: id });
    }

    return (
		<div>
			{trips.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<div>
					<Box className='history-header'>
						<Box className='history-header-title'>
							<h1>History</h1>
						</Box>
					</Box>
					<Box className='history-grid' style={{ width: '100%' }}>
						<DataGrid
							autoHeight
							rows={rows}
							columns={columns}
							experimentalFeatures={{ newEditingApi: true }}
							pageSize={20}
							getRowId={(row) => row.id}
							rowsPerPageOptions={[20]}
							editMode='row'
							disableSelectionOnClick
						/>
					</Box>
				</div>
			)}
		</div>
	);

    /*
	return (
		<div className='History'>
			<h1>History</h1>
			{trips.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box sx={{ height: 400, width: '100%' }}>
					<table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Start Address</th>
                                <th>End Address</th>
                                <th>Distance (mi)</th>
                                <th>Duration</th>
                                <th>Passengers</th>
                                <th>Year</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Carbon (lbs)</th>
                                <th>Carbon (lbs) / Person</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trips.map(row => {
                                return (
									<tr key={row.id}>
										<td>{row.id}</td>
										<td>{row.startAddress}</td>
										<td>{row.endAddress}</td>
										<td>{row.distance}</td>
										<td>{row.duration}</td>
										<td>{row.passengers}</td>
										<td>{row.year}</td>
										<td>{row.make}</td>
										<td>{row.model}</td>
										<td>{row.carbonPounds}</td>
                                        <td>{(row.carbonPounds / row.passengers).toFixed(2)}</td>
										<td>
											<Button
												size='small'
												onClick={() => handleDeleteRow(row.id)}
											>
												Delete
											</Button>
										</td>
									</tr>
								);
                            }
                            )}
                        </tbody>
                    </table>
				</Box>
			)}
		</div>
	);
    */
}

export default History;
