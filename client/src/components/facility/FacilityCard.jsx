import { Link } from "react-router-dom";
import Badge from '../ui/Badge.jsx';
import StatusIndicator from "../ui/StatusIndicator.jsx";
import CallButton from "../ui/CallButton.jsx";

export default function FacilityCard({ facility }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3 hover:shadow-md transition-shadow">

            {/* Header */}
            <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1">
                    <Badge type={facility.type} />
                    <Link to={`/facility/${facility.id}`}>
                        <h3 className="font-bold text-gray-800 hover:text-primary transition-colors leading-tight">
                            {facility.name}
                        </h3>
                    </Link>
                </div>
                <StatusIndicator hours={facility.hours} />
            </div>

            {/* Address */}
            <p className="text-sm text-gray-500">
                📍 {facility.district}, {facility.city}
            </p>

            {/* Payment badges */}
            <div className="flex gap-2 flex-wrap">
                {facility.payment.cash && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Cash</span>
                )}
                {facility.payment.mtn_momo && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">MTN MoMo</span>
                )}
                {facility.payment.orange_money && (
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Orange Money</span>
                )}
            </div>

            {/* Call Button */}
            <CallButton phone={facility.phone} />
        </div>
    );
}