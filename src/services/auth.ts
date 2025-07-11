// src/api/auth.js
import axios from "axios";
import type { ILogin, IRegister, IResedPassword, ISenEmail, IVerfCode, ParsedFormErrors } from "../types/auth.type";
import { toast } from "react-toastify";
import { handleApiError } from "../utils/handleApiError";



const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});
export const loginFunc = async (data: ILogin, setFormErrors?: (val: ParsedFormErrors) => void) => {

    try {
        const response = await API.post(
            "/api/Auth/Login",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Daxil olundu!");
        return response.data;
    } catch (error: unknown) {
        handleApiError(error, setFormErrors);
        console.log(error);
        throw new Error("Xəta baş verdi");
    }
};

export const registerFunc = async (data: IRegister, setFormErrors: (val: ParsedFormErrors) => void) => {
    try {
        const response = await API.post(
            "/api/Auth/Register",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Qeydiyyat uğurludur!");
        return response.data;
    } catch (error: unknown) {
        handleApiError(error, setFormErrors);
        console.log(error);
        throw new Error("Xəta baş verdi");
    }
};

export const sendEmilFunc = async (data: ISenEmail, setFormErrors: (val: ParsedFormErrors) => void) => {
    try {
        const response = await API.post(
            "/api/Auth/SendOtpCode",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Email gonderildi");
        return response.data;
    } catch (error: unknown) {
        handleApiError(error, setFormErrors);

        console.log(error);
        throw new Error("Xəta baş verdi");
    }
}


export const vefCodeFUnc = async (data: IVerfCode, setFormErrors: (val: ParsedFormErrors) => void) => {
    try {
        const response = await API.post(
            "/api/Auth/VerifyOtpCode",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Kod göndərildi");
        return response.data;
    } catch (error) {
        handleApiError(error, setFormErrors);

        throw new Error("Xəta baş verdi");


    }
}
export const resetPassword = async (data: IResedPassword,setFormErrors:(val: ParsedFormErrors) => void) => {
    try {
        const response = await API.post(
            "/api/Auth/ResetPassword",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Parol dəyişdirildi");
        return response.data;
    } catch (error: unknown) {
        handleApiError(error, setFormErrors);

        console.log(error);
        throw new Error("Xəta baş verdi");

    }
}