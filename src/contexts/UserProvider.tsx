
import { useState } from "react";
import { UserContext } from "./UserContext";
import { type IUserInfo, type IUserType } from "../types/uset.type";


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<IUserType[]>([]);
    const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false)
     const [modalLoading,setModalLoading]= useState<boolean>(false)

    const initialValue = {
        users,
        setUsers,
        userInfo,
        setUserInfo,
        loading,
        setLoading,
        setIsModal,
        isModal,
        setModalLoading,
        modalLoading
    };

    return (
        <UserContext.Provider value={initialValue}>
            {children}
        </UserContext.Provider>
    );
};
