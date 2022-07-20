import { createTheme } from '@mui/material/styles';
import backtonature from '../fonts/backtonature.woff'
import beautymountains from '../fonts/beautymountains.woff'
import chunkfive from '../fonts/chunkfive.woff';
import lemonjelly from '../fonts/lemonjelly.woff';
import proximanova from '../fonts/proximanova.woff';
import rooster from '../fonts/rooster.woff';

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
		fontSize: 16,
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,

		h1: {
			fontFamily: 'Sansita',
			fontWeight: 900,
		},
		h2: {
			fontFamily: 'Josefin Sans',
			fontWeight: 900,
		},
		h3: {
			fontFamily: 'Patrick Hand',
			fontWeight: 900,
		},
		h4: {
			fontFamily: 'Sansita',
			fontWeight: 900,
		},
		h5: {
			fontFamily: 'Yeseva One',
			fontWeight: 900,
		},
		h6: {
			fontFamily: 'Oleo Script',
			fontWeight: 900,
		},
		p: {
			fontFamily: 'Oswald',
			fontWeight: 900,
		},
		button: {
			fontFamily: 'Oleo Script',
			fontWeight: 900,
		},
		a: {
			fontFamily: 'Josefin Sans',
			fontWeight: 900,
		},
	},
});

export default theme;
