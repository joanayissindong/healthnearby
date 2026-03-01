import { Link } from 'react-router-dom';
import Badge from "../ui/Badge.jsx";
import StatusIndicator from "../ui/StatusIndicator.jsx";
import CallButton from "../ui/CallButton.jsx";

export default function FacilityDetail({ facility }) {
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">

            {/* Back */}
            <Link to="/" className="text-sm text-primary hover:underline">
                ← Back to results
            </Link>

            {/* Header */}
            <div className="flex flex-col gap-2">
                <Badge type={facility.type} />
                <h1 className="text-2xl font-bold text-gray-800">{facility.name}</h1>
                <StatusIndicator hours={facility.hours} />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1 text-sm text-gray-600">
                {facility.address && facility.address !== `${facility.district}, ${facility.city}` && (
                    <p>📍 {facility.address}</p>
                )}
                <p>🏙️ {facility.district}, {facility.city}</p>
            </div>

            {/* Opening Hours */}
            <div>
                <h2 className="font-semibold text-gray-700 mb-2">Opening Hours</h2>
                <div className="flex flex-col gap-1 text-sm text-gray-600">
                    {facility.hours.is_24h && (
                        <p className="text-green-600 font-semibold">✅ Open 24/7</p>
                    )}
                    {facility.hours.is_on_duty && (
                        <p className="text-green-600 font-semibold">🌙 On duty</p>
                    )}
                    {!facility.hours.is_on_duty && (
                        <>
                            <p>🗓️ Weekdays: {facility.hours.weekdays}</p>
                            <p>🗓️ Saturday: {facility.hours.saturday}</p>
                            <p>🗓️ Sunday: {facility.hours.sunday}</p>
                        </>
                    )}
                </div>
            </div>

            {/* Services */}
            <div>
                <h2 className="font-semibold text-gray-700 mb-2">Services</h2>
                <div className="flex flex-wrap gap-2">
                    {facility.services.map(service => (
                        <span key={service} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {service.replace(/_/g, ' ')}
                        </span>
                    ))}
                </div>
            </div>

            {/* Payment */}
            <div>
                <h2 className="font-semibold text-gray-700 mb-2">Payment Methods</h2>
                <div className="flex flex-wrap gap-2">
                    {facility.payment.cash && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">💵 Cash</span>
                    )}
                    {facility.payment.mtn_momo && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">💛 MTN MoMo</span>
                    )}
                    {facility.payment.orange_money && (
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">🟠 Orange Money</span>
                    )}
                    {facility.payment.insurance && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">🛡️ Insurance</span>
                    )}
                </div>
            </div>

            {/* Call */}
            <CallButton phone={facility.phone} />
        </div>
    );
}