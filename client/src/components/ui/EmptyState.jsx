export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
            <span className="text-5xl mb-4">🏥</span>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No facilities found</h3>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters.</p>
        </div>
    );
}