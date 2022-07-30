import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import {
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import SendIcon from '@mui/icons-material/Send';

function Charts(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const trips = useSelector(store => store.getTrips);

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className='custom-tooltip'>
					<p className='label'>{`${label} : ${payload[0].value}`}</p>
					<p className='intro'>{}</p>
					<p className='desc'>
						Anything you want can be displayed here.
					</p>
				</div>
			);
		}
	};

    let totalEmissions = 0;
	const indexedTrips = trips.map((trip, index) => {
        let carbonPoundsPerson = trip.carbonPounds / trip.passengers;
        console.log(carbonPoundsPerson);
        totalEmissions += carbonPoundsPerson;
		return {
			index: index + 1,
			...trip,
            carbonPoundsPerson: carbonPoundsPerson,
            avgCarbonPoundsPerson: totalEmissions / (index + 1),
		};
	});

	return (
		<Box>
			{trips.length === 0 ? (
				<Box mt={10}>
					<Typography variant='h5' color='primary' align='center'>
						Uh Oh! No previous trips taken 😧
					</Typography>
					<Typography
						mt={3}
						variant='h5'
						color='primary'
						align='center'
					>
						Add one now
					</Typography>
					<Box mt={3} display='flex' justifyContent='center'>
						<Button
							size='medium'
							onClick={() => history.push('/newtrip')}
							sx={{ width: 130 }}
							variant='contained'
							startIcon={<SendIcon />}
						>
							New Trip
						</Button>
					</Box>
				</Box>
			) : (
				<Box>
					<ComposedChart
						width={1000}
						height={700}
						data={indexedTrips}
						margin={{
							top: 20,
							right: 20,
							bottom: 20,
							left: 20,
						}}
					>
						<CartesianGrid stroke='#f5f5f5' />
						<XAxis dataKey='index' scale='band' />
						<YAxis />

						<Tooltip />
						<Legend />
						<Bar
							dataKey='carbonPoundsPerson'
							barSize={20}
							fill='#413ea0'
						/>
						<Line
							type='monotone'
							dataKey='avgCarbonPoundsPerson'
							stroke='#ff7300'
						/>
					</ComposedChart>
				</Box>
			)}
		</Box>
	);
}

export default Charts;
