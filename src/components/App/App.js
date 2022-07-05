import logo1 from '../../logos/logo-co2.png';
import logo2 from '../../logos/logo-react.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
	return (
		<div className="App">
			<header className="App-header">
                <h3>Know your <img src={logo1} className="App-logo" alt="co2-logo" /> so you can <img src={logo2} className="App-logo" alt="react-logo" /> accordingly</h3>
			</header>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
