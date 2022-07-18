import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#2c732c',
		},
		background: {
			default: '#111111',
			paper: '#212121',
		},
	},
	typography: {
		fontFamily: 'Lato',
		h1: {
			fontFamily: 'Montserrat',
		},
		h2: {
			fontFamily: 'Ubuntu Mono',
		},
		h3: {
			fontFamily: 'Ubuntu Mono',
		},
		h4: {
			fontFamily: 'Ubuntu Mono',
		},
		h6: {
			fontFamily: 'Ubuntu Mono',
		},
		h5: {
			fontFamily: 'Ubuntu Mono',
		},
		subtitle1: {
			fontFamily: 'Ubuntu Mono',
		},
		subtitle2: {
			fontFamily: 'Ubuntu Mono',
		},
		button: {
			fontFamily: 'Ubuntu Mono',
			fontWeight: 900,
		},
		overline: {
			fontFamily: 'Ubuntu Mono',
		},
	},
});

export default theme;
