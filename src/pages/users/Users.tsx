import { useContext, useState } from "react";
import UsersBody from "../../components/users/UsersBody"
import CustumeModal from "../../ui/modal"
import { UserContext } from "../../contexts/UserContext";
import { deleteUser, editUser, getAllUsers } from "../../services/users";
import type { IUserInfo } from "../../types/uset.type";
import Header from "../../components/header/Header";
import DeletModal from "../../ui/modal/DeleteModal";
import { useSearchParams } from "react-router-dom";


const Users = () => {
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

    const [searchParams] = useSearchParams();
    const SearchPhrase = searchParams.get("SearchPhrase") || "";
    const PageNumber = parseInt(searchParams.get("PageNumber") || "1", 10);
    const PageSize = 10;
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("AuthContext Provider is missing")
    }

    const { modalLoading, isModal, setIsModal, userInfo, setModalLoading, setUsers, deleteModal, setDelteModal, users } = userContext;

    const editUserFunc = async (data: IUserInfo) => {
        try {
            setModalLoading(true);
            await editUser(data, setFormErrors);

            const response = await getAllUsers({
                SearchPhrase,
                PageNumber,
                PageSize
            });

            setUsers(response.users);
            setModalLoading(false);
            setIsModal(false);
            setFormErrors({})
        } catch (error) {
            setModalLoading(false);
            console.log(error);
        }
    };

    const deleteUserFunc = async () => {
        setModalLoading(true)
        if (userInfo?.id) {
            await deleteUser(userInfo?.id)
        }
        setModalLoading(false)
        const respone = await getAllUsers();
        setUsers(respone.users)
        setDelteModal(false)
    }
   const closeBtn=()=>{
        setFormErrors({})
        setIsModal(false)
   }

   
    return (
        <div>
            <Header titile="Users" />
            <UsersBody users={users} />
            {
                userInfo &&
                <CustumeModal formErrors={formErrors} onSubmit={editUserFunc} initialValues={userInfo} loading={modalLoading} open={isModal} closeBtn={closeBtn } />
            }


            <DeletModal deleteUser={deleteUserFunc} open={deleteModal} closeBtn={() => setDelteModal(false)} loading={modalLoading} />

        </div>
    )
}

export default Users
