import { useParams } from 'react-router-dom';
import FacilityDetail from '../components/facility/FacilityDetail';
import Loader from '../components/ui/Loader';
import { useFacilityDetail } from '../hooks/useFacilityDetail';

export default function FacilityDetailPage() {
    const { id } = useParams();
    const { facility, loading, error } = useFacilityDetail(id);

    if (loading) return <Loader />;
    if (error)   return <p className="text-center text-red-500 py-8">{error}</p>;
    if (!facility) return null;

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <FacilityDetail facility={facility} />
        </main>
    );
}