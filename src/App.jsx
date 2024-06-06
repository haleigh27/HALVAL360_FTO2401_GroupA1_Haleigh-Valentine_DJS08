import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans.jsx';
import VanDetail from './pages/VanDetail.jsx';
import Layout from './components/Layout.jsx';

import './server.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/vans" element={<Vans />} />
					<Route path="/vans/:id" element={<VanDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
