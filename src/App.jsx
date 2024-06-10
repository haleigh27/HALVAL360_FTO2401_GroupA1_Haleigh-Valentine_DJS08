import { Routes, Route } from 'react-router-dom';
// Components
import Layout from './components/Layout.jsx';
import HostLayout from './components/HostLayout.jsx';
import AuthRequired from './components/AuthRequired.jsx';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
// Pages > Host
import Dashboard from './pages/Host/Dashboard.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhoto.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
// Pages > Vans
import Vans from './pages/Vans/Vans.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
// Database
import './server.jsx';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="vans" element={<Vans />} />
				<Route path="vans/:id" element={<VanDetail />} />
				<Route path="login" element={<Login />} />

				<Route element={<AuthRequired />}>
					<Route path="host" element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="vans" element={<HostVans />} />
						<Route path="vans/:id" element={<HostVanDetail />}>
							<Route index element={<HostVanInfo />} />
							<Route path="pricing" element={<HostVanPricing />} />
							<Route path="photos" element={<HostVanPhotos />} />
						</Route>
					</Route>
				</Route>
				{/* catch-all route */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
