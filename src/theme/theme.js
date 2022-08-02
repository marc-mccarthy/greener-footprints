import { createTheme } from '@mui/material/styles';

// Fonts
// 'Josefin Sans, Oleo Script, Oswald, Patrick Hand, Roboto, Sansita, Yeseva One'

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#0b6b07',
		},
		secondary: {
			main: '#226f85',
		},
	},

	typography: {
		fontFamily: 'Sansita, Patrick Hand, Roboto, Yeseva One',
		fontSize: 14,
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,

		h1: {
			fontFamily: 'Sansita',
			fontWeight: 500,
		},
		h2: {
			fontFamily: 'Josefin Sans',
			fontWeight: 500,
		},
		h3: {
			fontFamily: 'Patrick Hand',
			fontWeight: 500,
		},
		h4: {
			fontFamily: 'Sansita',
			fontWeight: 500,
		},
		h5: {
			fontFamily: 'Yeseva One',
			fontWeight: 500,
		},
		h6: {
			fontFamily: 'Yeseva One',
			fontWeight: 500,
		},
		h6: {
			fontFamily: 'Yeseva One',
			fontWeight: 500,
		},
		p: {
			fontFamily: 'Oswald',
			fontWeight: 900,
		},
		button: {
			fontFamily: 'Patrick Hand',
			fontWeight: 300,
		},
		a: {
			fontFamily: 'Josefin Sans',
			fontWeight: 900,
		},
		body1: {
			fontFamily: 'Yeseva One',
			fontWeight: 300,
		},
	},
});

export default theme;
