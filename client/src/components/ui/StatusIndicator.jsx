import { isOpenNow, getStatusLabel  } from "../../utils/openingHoursHelper.js";

export default function StatusIndicator({ hours }) {
    const open = isOpenNow(hours);
    return (
        <span className={`flex items-center gap-1 text-xs font-semibold ${open ? 'text-gray-600' : 'text-red-500'}`}>
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`} />
            {getStatusLabel(hours)}
        </span>
    );
}