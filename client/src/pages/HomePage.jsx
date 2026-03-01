import { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import FilterBar from '../components/search/FilterBar';
import FacilityList from '../components/facility/FacilityList';
import { useFacilities } from '../hooks/useFacilities';

export default function HomePage() {
    const [filters, setFilters] = useState({
        city:         '',
        type:         '',
        mtn_momo:     false,
        orange_money: false,
        on_duty:      false,
    });

    const { facilities, loading, error } = useFacilities(filters);

    const handleSearch = ({ city, type }) => {
        setFilters(prev => ({ ...prev, city, type }));
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <SearchBar onSearch={handleSearch} />
                <FilterBar filters={filters} onChange={handleFilterChange} />
            </div>
            <p className="text-sm text-gray-500">
                {facilities.length === 1 ? "1 facility found" : `${facilities.length} facilities found`}
            </p>
            <FacilityList facilities={facilities} loading={loading} error={error} />
        </main>
    );
}