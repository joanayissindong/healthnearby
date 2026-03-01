import FacilityCard from "./FacilityCard.jsx";
import EmptyState from "../ui/EmptyState.jsx";
import Loader from "../ui/Loader.jsx";

export default function FacilityList({ facilities, loading, error }) {
    if (loading) return <Loader />;
    if (error) return <p className="text-center text-red-500 py-8">{error}</p>;
    if (!facilities || facilities.length === 0) return <EmptyState />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map(facility => (
                <FacilityCard key={facility.id} facility={facility} />
            ))}
        </div>
    );
}