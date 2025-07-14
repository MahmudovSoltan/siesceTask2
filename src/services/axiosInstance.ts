// utils/axiosInstance.ts
import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "../utils/cookie";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        if (accessToken && config.headers) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config as any;

        const refresh = getCookie("refresh_token");

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            refresh
        ) {
            originalRequest._retry = true;

            try {
                const refreshRes = await axios.post(`${baseURL}/api/Auth/Refresh`, {
                    refreshToken: refresh,
                });

                const { accessToken, refreshToken } = refreshRes.data;

                setCookie("refresh_token", refreshToken);
                setCookie("accessToken", accessToken);

                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                deleteCookie("refresh_token");
                deleteCookie("accessToken");
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
