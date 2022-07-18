import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#059e00',
		},
		secondary: {
			main: '#04a7d6',
		},
		background: {
			default: '#f7f7f7',
			paper: '#9de3fc',
		},
		type: 'dark',
		primary: {
			main: '#059e00',
		},
		secondary: {
			main: '#04a7d6',
		},
		background: {
			default: '#f7f7f7',
			paper: '#9de3fc',
		},
	},
	typography: {
		fontFamily: 'Playfair Display',
		h1: {
			fontFamily: 'Playfair Display',
		},
		h2: {
			fontFamily: 'Arvo',
		},
		h3: {
			fontFamily: 'Dosis',
		},
		h4: {
			fontFamily: 'Montserrat',
		},
		h6: {
			fontFamily: 'Montserrat',
		},
		h5: {
			fontFamily: 'Montserrat',
		},
		subtitle1: {
			fontFamily: 'Montserrat',
		},
		subtitle2: {
			fontFamily: 'Montserrat',
		},
		button: {
			fontFamily: 'Quicksand',
			fontWeight: 900,
		},
		overline: {
			fontFamily: 'Quicksand',
		},
	},
});

export default theme;
