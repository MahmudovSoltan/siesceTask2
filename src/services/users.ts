// src/services/user.service.ts
import { toast } from "react-toastify";
import type { IUserInfo, IUserType } from "../types/uset.type";
import { httpRequest } from "./httpRequest";
import API_CONTROLLER from "./api.config";
import type { ParsedFormErrors } from "../types/auth.type";
import { handleApiError } from "../utils/handleApiError";


interface IParamsType {
  SearchPhrase?: string;
  PageSize?: number;
  PageNumber?: number;
}

interface UserListResponse {
  users: IUserType[];
  totalCount: number;
}

export const getAllUsers = async (
  params: IParamsType = {}
): Promise<UserListResponse> => {
  try {
    const response = await httpRequest<UserListResponse>(
      API_CONTROLLER.user(),
      {
        method: "GET",
        queryParams: params,
      }
    );
    return response ?? { users: [], totalCount: 0 };
  } catch (error) {
    console.error("User-lər alınarkən xəta baş verdi:", error);
    return { users: [], totalCount: 0 };
  }
};

export const editUser = async (
  data: IUserInfo,
  setFormErrors?: (val: ParsedFormErrors) => void
): Promise<IUserInfo> => {
  try {
    const response = await httpRequest<IUserInfo>(API_CONTROLLER.user(), {
      method: "PUT",
      body: data,
    });
    toast.success("Edit edildi");
    return response!;
  } catch (error) {
    handleApiError(error, setFormErrors);
    throw error;
  }
};

export const userDetail = async (id: string): Promise<IUserInfo | undefined> => {
  try {
    const response = await httpRequest<IUserInfo>(
      API_CONTROLLER.user(`/${id}`),
      {
        method: "GET",
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await httpRequest(API_CONTROLLER.user(`/${id}`), {
      method: "DELETE",
    });
    toast.success("İstifadəçi silindi");
    return response;
  } catch (error) {
    toast.error("Xəta baş verdi");
    console.error(error);
  }
};

export const userInfo = async (): Promise<IUserInfo | undefined> => {
  try {
    const response = await httpRequest<IUserInfo>(
      API_CONTROLLER.auth("/Info"),
      {
        method: "GET",
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
