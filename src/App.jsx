import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder Pages
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Auth from './pages/Auth';
import UX from './pages/UX';
import Data from './pages/Data';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="architecture" element={<Architecture />} />
                <Route path="auth" element={<Auth />} />
                <Route path="ux" element={<UX />} />
                <Route path="data" element={<Data />} />
            </Route>
        </Routes>
    );
}
