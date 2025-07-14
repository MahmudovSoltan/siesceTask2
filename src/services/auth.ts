// src/api/auth.js
import type { ILogin, IRegister, IResedPassword, ISenEmail, IVerfCode, ParsedFormErrors } from "../types/auth.type";
import { toast } from "react-toastify";
import { handleApiError } from "../utils/handleApiError";
import axiosInstance from "./axiosInstance";


export const loginFunc = async (data: ILogin, setFormErrors?: (val: ParsedFormErrors) => void) => {

    try {
        const response = await axiosInstance.post(
            "/api/Auth/Login",
            data,
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
        const response = await axiosInstance.post(
            "/api/Auth/Register",
            data,
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
        const response = await axiosInstance.post(
            "/api/Auth/SendOtpCode",
            data,
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
        const response = await axiosInstance.post(
            "/api/Auth/VerifyOtpCode",
            data,
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
        const response = await axiosInstance.post(
            "/api/Auth/ResetPassword",
            data,
        );
        toast.success("Parol dəyişdirildi");
        return response.data;
    } catch (error: unknown) {
        handleApiError(error, setFormErrors);

        console.log(error);
        throw new Error("Xəta baş verdi");

    }
}