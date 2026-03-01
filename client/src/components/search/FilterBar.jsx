export default function FilterBar({ filters, onChange }) {
    const toggle = (key) => onChange({ ...filters, [key]: !filters[key]});

    return (
        <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-gray-500">Filters:</span>
            {[
                { key: 'mtn_momo', label: 'MTN MoMo' },
                { key: 'orange_money', label: 'Orange Money' },
                { key: 'on_duty', label: 'On Duty' },
            ].map(({ key, label }) => (
                <button key={key} onClick={() => toggle(key)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors 
                ${filters[key] ? 
                    'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:border-primary'}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}