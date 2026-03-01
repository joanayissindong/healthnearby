import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <main className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <span className="text-6xl mb-4">🏥</span>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">404</h1>
            <p className="text-gray-500 mb-6">Page not found.</p>
            <Link to="/" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Back to home
            </Link>
        </main>
    );
}