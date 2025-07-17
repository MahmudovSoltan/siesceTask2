
const BASE_URL = import.meta.env.VITE_API_BASE_URL

const GATEWAY = {
    auth: `${BASE_URL}/api/Auth`,
    user: `${BASE_URL}/api/Users`,
} as const;

const API_CONTROLLER = {
    auth: (url = '') => `${GATEWAY.auth}${url}`,
    user: (url = '') => `${GATEWAY.user}${url}`,
};

export default API_CONTROLLER;
