import { toast } from "react-toastify";

import type { ILogin, IRegister, IResedPassword, ISenEmail, IVerfCode, ParsedFormErrors } from "../types/auth.type";
import { httpRequest } from "./httpRequest";
import API_CONTROLLER from "./api.config";
import { handleApiError } from "../utils/handleApiError";
// import { User } from "../contexts/AuthContext";

export const loginFunc = async (
  data: ILogin,
  setFormErrors?: (val: ParsedFormErrors) => void
) => {
  try {
    const response = await httpRequest<Promise<{
      accessToken: string;
      refreshToken: string;
      refreshTokenExpiredAt: string
    }>>(API_CONTROLLER.auth("/Login"), {
      method: "POST",
      body: data,
    });
    toast.success("Daxil olundu!");
    return response;
  } catch (error) {
    handleApiError(error, setFormErrors);
    throw error;
  }
};

export const registerFunc = async (
  data: IRegister,
  setFormErrors: (val: ParsedFormErrors) => void
) => {
  try {
    const response = await httpRequest(API_CONTROLLER.auth("/Register"), {
      method: "POST",
      body: data,
    });
    toast.success("Qeydiyyat uğurludur!");
    return response;
  } catch (error) {
    handleApiError(error, setFormErrors);
    throw error;
  }
};

export const sendEmilFunc = async (
  data: ISenEmail,
  setFormErrors: (val: ParsedFormErrors) => void
) => {
  try {
    const response = await httpRequest(API_CONTROLLER.auth("/SendOtpCode"), {
      method: "POST",
      body: data,
    });
    toast.success("Email göndərildi!");
    return response;
  } catch (error) {
    handleApiError(error, setFormErrors);
    throw error;
  }
};

export const vefCodeFUnc = async (
  data: IVerfCode,
  setFormErrors: (val: ParsedFormErrors) => void
) => {
  try {
    const response = await httpRequest(API_CONTROLLER.auth("/VerifyOtpCode"), {
      method: "POST",
      body: data,
    });
    toast.success("Kod təsdiqləndi");
    return response;
  } catch (error) {
    handleApiError(error, setFormErrors);
    throw error;
  }
};

export const resetPassword = async (
  data: IResedPassword,
  setFormErrors: (val: ParsedFormErrors) => void
) => {
  try {
    const response = await httpRequest(API_CONTROLLER.auth("/ResetPassword"), {
      method: "POST",
      body: data,
    });
    toast.success("Parol dəyişdirildi");
    return response;
  } catch (error) {
    handleApiError(error, setFormErrors);
    throw error;
  }
};
