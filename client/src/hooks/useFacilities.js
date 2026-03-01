import { useState, useEffect } from 'react';
import { facilityApiService} from "../services/facilityApiService.js";

export function useFacilities(filters) {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFacilities = async () => {
            setLoading(true);
            setError(null);
            try {
                const hasFilters = filters.city || filters.type || filters.mtn_momo || filters.orange_money || filters.on_duty;
                const data = hasFilters ? await facilityApiService.search(filters) : await facilityApiService.getAll();
                setFacilities(data);
            } catch (err) {
                setError('Failed to fetch facilities');
            } finally {
                setLoading(false);
            }
        };

        fetchFacilities();
    }, [filters.city, filters.type, filters.mtn_momo, filters.orange_money, filters.on_duty]);

    return { facilities, loading, error };
}