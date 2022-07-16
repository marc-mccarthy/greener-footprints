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
import loadingBar from '../../images/loading-bar.gif';
import './History.css';

function History(props) {

	useEffect(() => {
		dispatch({type: 'GET_TRIPS_SAGA', payload: { userId: user.id }});
	}, []);

    const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	const trips = useSelector(store => store.getTrips);

    const handleDeleteRow = (rowId) => {
        dispatch({type: 'DELETE_TRIP_SAGA', payload: rowId });
    }

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


}

export default History;
