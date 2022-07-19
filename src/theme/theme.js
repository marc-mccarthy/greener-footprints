import { createTheme } from '@mui/material/styles';
import backtonature from '../fonts/backtonature.woff'
import beautymountains from '../fonts/beautymountains.woff'
import lemonjelly from '../fonts/lemonjelly.woff';
import moonshine from '../fonts/moonshine.woff';
import rooster from '../fonts/rooster.woff';
import chunkfive from '../fonts/chunkfive.woff';
import rhythm from '../fonts/rhythm.woff';
import proximanova from '../fonts/proximanova.woff';

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
		fontFamily:
			'Oswald',
		fontSize: 18,
		button: {
			fontFamily: 'Oswald',
			fontWeight: 400,
		},
        h3: {
            fontFamily: 'backtonature',
            fontWeight: 900,
        }
	},
});

export default theme;
