import { createContext } from "react";
import type { IUserInfo, IUserType } from "../types/uset.type";



interface IUserContextType {
  users: IUserType[];
  setUsers: React.Dispatch<React.SetStateAction<IUserType[]>>;
  userInfo: IUserInfo | null; // Əgər tipini dəqiqləşdirsən daha yaxşı olar
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalLoading: boolean;
  setModalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContextType | undefined>(undefined);
