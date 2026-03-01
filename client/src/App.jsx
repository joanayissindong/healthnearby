import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FacilityDetailPage from './pages/FacilityDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1">
                    <Routes>
                        <Route path="/"              element={<HomePage />} />
                        <Route path="/facility/:id"  element={<FacilityDetailPage />} />
                        <Route path="*"              element={<NotFoundPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}