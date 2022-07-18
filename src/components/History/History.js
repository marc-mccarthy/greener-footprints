import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import loadingBar from '../../images/loading-bar.gif';
import './History.css';

function History(props) {

    const dispatch = useDispatch();

	useEffect(() => {
        dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

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
			width: 240,
			editable: true,
		},
		{
			field: 'endAddress',
			headerName: 'End Address',
			width: 240,
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
			field: 'distance',
			headerName: 'Distance (mi)',
			type: 'number',
			width: 110,
			editable: false,
		},
		{
			field: 'duration',
			headerName: 'Duration',
			width: 140,
			editable: false,
		},
		{
			field: 'vehicle',
			headerName: 'Vehicle',
			width: 230,
			editable: false,
			valueGetter: params =>
				`${params.row.year} ${params.row.make} ${params.row.model}`,
		},
		{
			field: 'carbonPounds',
			headerName: 'Carbon (lbs)',
			type: 'number',
			width: 100,
			editable: false,
		},
		{
			field: 'carbonPoundsPerson',
			headerName: 'Carbon (lbs)',
			type: 'number',
			width: 120,
			editable: false,
			valueGetter: params =>
				params.row.carbonPounds / params.row.passengers,
		},
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Actions',
			width: 100,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				return [
					<GridActionsCellItem
						icon={<DeleteIcon />}
						label='Delete'
						color='inherit'
						onClick={() => dispatch({type: 'DELETE_TRIP_SAGA', payload: id })}
					/>,
				];
			},
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

    const [snackbar, setSnackbar] = useState(null);
	const handleCloseSnackbar = () => setSnackbar(null);

    const processRowUpdate = (params) => {
		const modelId = trips.find(trip => trip.id === params.id).modelId;
		dispatch({ type: 'GET_TRIPS', payload: [] });
		dispatch({
			type: 'UPDATE_TRIP_SAGA',
			payload: {
				id: params.id,
				model: modelId,
				startAddress: params.startAddress,
				endAddress: params.endAddress,
				passengers: params.passengers,
			},
		});
		setSnackbar({
			children: 'User successfully saved',
			severity: 'success',
		});
	};

    const processRowUpdateError = useCallback(error => {
	//	setSnackbar({ children: error.message, severity: 'error' });
	}, []);

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
					<Box
						className='history-grid'
						style={{ width: '100%' }}
						sx={{
							width: '100%',
							'& .MuiDataGrid-cell--editable': {
								bgcolor: theme =>
									theme.palette.mode === 'dark'
										? '#376331'
										: 'rgb(237, 237, 235)',
							},
						}}
					>
						<DataGrid
							autoHeight
							rows={rows}
							columns={columns}
							pageSize={20}
							getRowId={row => row.id}
							rowsPerPageOptions={[20]}
							editMode='row'
							disableSelectionOnClick
							processRowUpdate={processRowUpdate}
							onProcessRowUpdateError={error =>
								processRowUpdateError(error)
							}
							experimentalFeatures={{ newEditingApi: true }}
						/>
						{!!snackbar && (
							<Snackbar
								open
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								onClose={handleCloseSnackbar}
								autoHideDuration={6000}
							>
								<Alert
									{...snackbar}
									onClose={handleCloseSnackbar}
								/>
							</Snackbar>
						)}
					</Box>
				</div>
			)}
		</div>
	);
}

export default History;
