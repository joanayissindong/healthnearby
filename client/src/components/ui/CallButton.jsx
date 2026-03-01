import { formatPhone } from "../../utils/formatHelper.js";
import {href} from "react-router-dom";

export default function CallButton({ phone }) {
    if (!phone) return null;
    return (
        <a href={`tel:${phone}`}
           className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors w-full"
           >
            📞 Call now
        </a>
    );
}