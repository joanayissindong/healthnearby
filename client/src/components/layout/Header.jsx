import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-primary shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl">🏥</span>
                    <span className="text-white font-bold text-xl tracking-tight">HealthNearby</span>
                </Link>
                <p className="text-white/80 text-sm hidden sm:block">
                    Find healthcare facilities in Cameroon
                </p>
            </div>
        </header>
    );
}