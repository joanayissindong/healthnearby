const API_URL = import.meta.env.VITE_API_URL;

export const facilityApiService = {
    async getAll() {
        const res = await fetch(`${API_URL}/api/v1/facilities`);
        const data = await res.json();
        return data.data;
    },

    async search ({ city, type, mtn_momo, orange_money, on_duty }) {
        const params = new URLSearchParams();
        if (city) params.append("city", city);
        if (type) params.append("type", type);
        if (mtn_momo) params.append("mtn_momo", true);
        if (orange_money) params.append("orange_money", true);
        if (on_duty) params.append("on_duty", true);

        const res = await fetch(`${API_URL}/api/v1/facilities/search?${params}`);
        const data = await res.json();
        return data.data;
    },

    async getById(id) {
        const res = await fetch(`${API_URL}/api/v1/facilities/${id}`);
        const data = await res.json();
        return data.data;
    },

    async getCities() {
        const res = await fetch(`${API_URL}/api/v1/facilities/meta/cities`);
        const data = await res.json();
        return data.data;
    },

    async getTypes() {
        const res = await fetch(`${API_URL}/api/v1/facilities/meta/types`);
        const data = await res.json();
        return data.data;
    },
};