import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	Box,
	Button,
	Grid,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import loadingBar from '../../images/loading-bar.gif';
import './History.css';

function History(props) {

	const dispatch = useDispatch();
	const history = useHistory();
	const trips = useSelector(store => store.getTrips);

	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			headerClassName: 'theme--header',
			headerAlign: 'center',
			minWidth: 40,
			maxWidth: 70,
			flex: 1,
			editable: true,
            hide: true,
		},
		{
			field: 'startAddress',
			headerName: 'Start Address',
			headerClassName: 'theme--header',
			minWidth: 210,
			flex: 1,
			editable: true,
		},
		{
			field: 'endAddress',
			headerName: 'End Address',
			headerClassName: 'theme--header',
			minWidth: 210,
			flex: 1,
			editable: true,
		},
		{
			field: 'passengers',
			headerName: 'Passengers',
			headerClassName: 'theme--header',
			headerAlign: 'center',
			type: 'number',
			minWidth: 110,
			maxWidth: 120,
			flex: 1,
			editable: true,
		},
		{
			field: 'distance',
			headerName: 'Distance (mi)',
			headerClassName: 'theme--header',
			type: 'number',
			minWidth: 110,
			maxWidth: 150,
			flex: 1,
			editable: false,
		},
		{
			field: 'duration',
			headerName: 'Duration',
			headerClassName: 'theme--header',
			minWidth: 120,
			maxWidth: 180,
			flex: 1,
			editable: false,
		},
		{
			field: 'vehicle',
			headerName: 'Vehicle',
			headerClassName: 'theme--header',
			minWidth: 189,
			maxWidth: 260,
			flex: 1,
			editable: false,
			valueGetter: params =>
				`${params.row.year} ${params.row.make} ${params.row.model}`,
		},
		{
			field: 'carbonPounds',
			headerName: 'CO2 (lbs)',
			headerClassName: 'theme--header',
			headerAlign: 'center',
			type: 'number',
			minWidth: 100,
			maxWidth: 150,
			flex: 1,
			editable: false,
		},
		{
			field: 'carbonPoundsPerson',
			headerName: 'CO2 Person (lbs)',
			headerClassName: 'theme--header',
			headerAlign: 'center',
			type: 'number',
			minWidth: 140,
			maxWidth: 160,
			flex: 1,
			editable: false,
			valueGetter: params =>
				params.row.carbonPounds / params.row.passengers,
		},
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Actions',
			headerClassName: 'theme--header',
			headerAlign: 'center',
			minWidth: 110,
			maxWidth: 120,
			flex: 1,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				return [
					<GridActionsCellItem
						icon={<EditIcon />}
						label='Edit'
						color='inherit'
						onClick={() => {
							dispatch({ type: 'EDIT_TRIP_SAGA', payload: id });
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
		if (
			newRow.startAddress === oldRow.startAddress &&
			newRow.endAddress === oldRow.endAddress &&
			newRow.passengers === oldRow.passengers
		) {
			console.log('No Change');
			return;
		}
		const modelId = trips.find(trip => trip.id === newRow.id).modelId;
		dispatch({ type: 'GET_TRIPS', payload: [] });
		dispatch({ type: 'UPDATE_TRIP_SAGA', payload: { ...newRow, modelId } });
	};

	const processRowUpdateError = (error) => {
		// console.log('ERROR:', error);
	};

    const [selectedRows, setSelectedRows] = useState([]);

    const deleteMultiple = () => {
        console.log('DELETE MULTIPLE:', selectedRows);
        selectedRows.forEach(id => {
            dispatch({ type: 'DELETE_TRIP_SAGA', payload: id });
        });
    }

	return (
		<Box>
			{trips.length === 0 ? (
				<img id='loadingBar' src={loadingBar} alt='loading bar' />
			) : (
				<Box>
					<Box >
						<Typography variant='h4' color='primary' align='center'>
							History
						</Typography>
					</Box>
					<Box>
						<Grid
							container
							direction='row'
							justifyContent='center'
							alignItems='center'
							sx={{
								height: 300,
								width: '100%',
								'& .theme--header': {
									backgroundColor: '#059e00',
									color: '#fff',
								},
							}}
						>
							<Grid item xs={11.5}>
								<Box mb={2}>
									<Button
										startIcon={<DeleteIcon />}
										onClick={deleteMultiple}
                                        color='secondary'
										variant='contained'
									>
										Delete Selected
									</Button>
								</Box>

								<DataGrid
									autoHeight
									rows={trips}
									columns={columns}
									pageSize={15}
									getRowId={row => row.id}
									rowsPerPageOptions={[15]}
									editMode='row'
									disableSelectionOnClick
									processRowUpdate={processRowUpdate}
									onProcessRowUpdateError={() =>
										processRowUpdateError
									}
									checkboxSelection={true}
									experimentalFeatures={{
										newEditingApi: true,
									}}
									onSelectionModelChange={ids => {
										setSelectedRows(ids);
										console.log(
											'SELECTION MODEL CHANGE:',
											ids
										);
									}}
									sx={{
										boxShadow: 4,
										border: 4,
										borderColor: 'primary.light',
										'& .MuiDataGrid-cell:hover': {
											color: 'primary.main',
										},
									}}
								/>
							</Grid>
						</Grid>
					</Box>
				</Box>
			)}
		</Box>
	);
}

export default History;
