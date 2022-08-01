import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import LoadingBar from '../LoadingBar/LoadingBar';

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	LineController,
	BarController,
	Tooltip,
	Legend
);

function Charts(props) {
	const dispatch = useDispatch();
	const trips = useSelector(store => store.getTrips);

	useEffect(() => {
		dispatch({ type: 'GET_TRIPS_SAGA' });
	}, []);

	let totalEmissions = 0;
	const indexedTrips = trips.map((trip, index) => {
		let carbonPoundsPerson = trip.carbonPounds / trip.passengers;
		totalEmissions += carbonPoundsPerson;
		return {
			index: index + 1,
			...trip,
			carbonPoundsPerson: carbonPoundsPerson,
			avgCarbonPoundsPerson: totalEmissions / (index + 1),
		};
	});

	let data = {
		labels: indexedTrips.map(trip => {
			return `${trip.index}. ${trip.startAddress} - ${trip.endAddress}`;
		}),
		datasets: [
			{
				type: 'bar',
				label: 'Carbon Pounds',
				data: indexedTrips.map(trip => {
					return trip.carbonPoundsPerson;
				}),
				backgroundColor: 'rgb(11, 107, 7, 0.2)',
				borderColor: 'rgb(11, 107, 7, 1)',
				borderWidth: 1.5,
			},
			{
				type: 'line',
				label: 'Average Carbon Pounds',
				data: indexedTrips.map(trip => {
					return trip.avgCarbonPoundsPerson;
				}),
				backgroundColor: 'rgb(255, 0, 0, 0.2)',
				borderColor: 'rgb(255, 0, 0, 1)',
				borderWidth: 1.5,
			},
		],
	};

	return (
		<Box ml={5} mr={5}>
			{trips.length === 0 ? (
				<Box mt={10}>
					<LoadingBar />
				</Box>
			) : (
				<Chart data={data} />
			)}
		</Box>
	);
}

export default Charts;
