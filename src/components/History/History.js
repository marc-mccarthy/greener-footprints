import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import loadingBar from '../../images/loading-bar.gif';
import './History.css';

function History(props) {

    const dispatch = useDispatch();
    const history = useHistory();

	useEffect(() => {
        dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	const trips = useSelector(store => store.getTrips);

	const columns = [
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
			headerName: 'CO2 (lbs)',
			type: 'number',
			width: 100,
			editable: false,
		},
		{
			field: 'carbonPoundsPerson',
			headerName: 'CO2 / Person (lbs)',
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
						icon={<EditIcon />}
						label='Edit'
						color='inherit'
						onClick={() => {
                            // dispatch({ type: 'EDIT_TRIP_SAGA', payload: id });
							history.push(`/edittrip/${id}`);
                        }}
					/>,
					<GridActionsCellItem
						icon={<DeleteIcon />}
						label='Delete'
						color='inherit'
						onClick={() =>
							dispatch({ type: 'DELETE_TRIP_SAGA', payload: id })
						}
					/>,
				];
			},
		},
	];

    const processRowUpdate = (newRow, oldRow) => {
        console.log('NEW ROW:', newRow);
        console.log('OLD ROW:', oldRow);
        if (newRow.startAddress === oldRow.startAddress && newRow.endAddress === oldRow.endAddress && newRow.passengers === oldRow.passengers) {
            console.log('No Change');
            return;
        }
        const modelId = trips.find(trip => trip.id === newRow.id).modelId;
        dispatch({ type: 'GET_TRIPS', payload: [] });
        dispatch({ type: 'UPDATE_TRIP_SAGA', payload: {...newRow, modelId} });
	};

    const processRowUpdateError = (error) => {
        // console.log('ERROR:', error);
	    // setSnackbar({ children: error.message, severity: 'error' });
	};

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
						}}
					>
						<DataGrid
							autoHeight
							rows={trips}
							columns={columns}
							pageSize={20}
							getRowId={(row) => row.id}
							rowsPerPageOptions={[20]}
							editMode='row'
							disableSelectionOnClick
							processRowUpdate={processRowUpdate}
							onProcessRowUpdateError={processRowUpdateError}
							experimentalFeatures={{ newEditingApi: true }}
						/>
					</Box>
				</div>
			)}
		</div>
	);
}

export default History;
