export function formatPhone(phone) {
    if (!phone) return null;
    return phone.replace(/(\+237)(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
}

export function formatType(type) {
    const label = {
        hospital: 'Hospital',
        clinic: 'Clinic',
        pharmacy: 'Pharmacy',
        laboratory: 'Laboratory',
        health_center: 'Health center',
    };
    return labels[type] || type;
}

export function formatCity(city) {
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
}