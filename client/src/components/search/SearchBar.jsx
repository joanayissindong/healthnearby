import { useState } from "react";

const TYPES = [
    { value: '', label: 'All types' },
    { value: 'hospital', label: 'Hospital' },
    { value: 'clinic', label: 'Clinic' },
    { value: 'pharmacy', label: 'Pharmacy' },
    { value: 'laboratory', label: 'Laboratory' },
    { value: 'health_center', label: 'Health center' },
];

const CITIES = [
    { value: '', label: 'All cities' },
    { value: 'Douala', label: 'Douala' },
    { value: 'Yaoundé', label: 'Yaoundé' },
];

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");
    const [type, setType] = useState("");

    const handleSearch = () => {
        onSearch({ city, type });
    };

    return (
        <div className="flex flex-col sm:flex-row gap-2 w-full">
            <select value={city} onChange={e => setCity(e.target.value)}
                    className="w-full sm:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                {CITIES.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                ))}
            </select>

            <select value={type} onChange={e => setType(e.target.value)}
                    className="w-full sm:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                {TYPES.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                ))}
            </select>

            <button onClick={handleSearch} className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg transition-colors text-sm"
                    >
                Search
            </button>
        </div>
    );
}