import { useState, useEffect } from 'react';
import { facilityApiService } from "../services/facilityApiService.js";

export function useFacilityDetail(id) {
    const [facility, setFacility] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const fetchFacility = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await facilityApiService.getById(id);
                setFacility(data);
            } catch (err) {
                setError('Failed to load facility');
            } finally {
                setLoading(false);
            }
        };
        fetchFacility();
    }, [id]);

    return { facility, loading, error };
}