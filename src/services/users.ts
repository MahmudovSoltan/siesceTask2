// services/getAllUsers.ts
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";
import type { IUserInfo, IUserType } from "../types/uset.type";
import { handleApiError } from "../utils/handleApiError";
import type { ParsedFormErrors } from "../types/auth.type";


interface IParamsType {
  SearchPhrase?: string,
  PageSize?: number,
  PageNumber?: number
}
interface UserListResponse {
  users: IUserType[];
  totalCount: number;
}

export const getAllUsers = async (
  params: IParamsType = {}
): Promise<UserListResponse> => {
  try {
    const response = await axiosInstance.get<UserListResponse>("/api/Users", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("User-lər alınarkən xəta baş verdi:", error);
    return { users: [], totalCount: 0 };
  }
};
export const editUser = async (
  data: IUserInfo, setFormErrors?: (val: ParsedFormErrors) => void
): Promise<IUserInfo> => {
  try {
    const response = await axiosInstance.put("/api/Users", data);
    toast.success("edit edildi");
    return response.data;
  } catch (error) {
    console.error("User-lər alınarkən xəta baş verdi:", error);
    handleApiError(error, setFormErrors);
    throw error;

  }
};
export const userDetail = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/Users/${id}`)
    return response.data
  } catch (error) {
    console.log(error);

  }
}
export const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/api/Users/${id}`)
    toast.success("İstifadəçi silindi")
    return response.data
  } catch (error) {
    toast.error("Xəta baş verdi ")
    console.log(error);

  }
}

export const userInfo = async () => {
  try {
    const response = await axiosInstance.get(`/api/Auth/Info`)
    return response.data
  } catch (error) {
    console.log(error);

  }
}


