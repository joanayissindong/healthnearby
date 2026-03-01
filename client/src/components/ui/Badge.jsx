const typeColors = {
    hospital: 'bg-blue-100 text-blue-700',
    clinic: 'bg-purple-100 text-purple-700',
    pharmacy: 'bg-green-100 text-green-700',
    laboratory: 'bg-yellow-100 text-yellow-700',
    health_center: 'bg-orange-100 text-orange-700',
};

export default function Badge({ type }) {
    const labels = {
        hospital: 'Hospital',
        clinic: 'Clinic',
        pharmacy: 'Pharmacy',
        laboratory: 'Laboratory',
        health_center: 'Health center',
    };
    return (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColors[type] || 'bg-gray-100 text-gray-600'}`}>
            {labels[type] || type}
        </span>
    );
}