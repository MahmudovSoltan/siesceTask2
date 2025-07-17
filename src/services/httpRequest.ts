// src/api/httpRequest.ts
import axiosInstance from "./axiosInstance";

type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    queryParams?: Record<string, any>;
    filterParams?: Record<string, any>;
    headers?: Record<string, string>;
};

export async function httpRequest<T>(url: string, options: RequestOptions): Promise<T | undefined> {
    const { method = 'GET', body, queryParams, filterParams, headers } = options;

    const params = { ...queryParams };
    if (filterParams) {
        params['filterData'] = JSON.stringify(filterParams);
    }

    try {
        const response = await axiosInstance.request<T>({
            url,
            method,
            data: body,
            params,
            headers,
        });
        return response.data;
    } catch (error) {
        console.error("HTTP Error:", error);
        throw error;
    }
}
