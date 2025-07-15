import { useContext, useState } from "react";
import UsersBody from "../../components/users/UsersBody"
import CustumeModal from "../../ui/modal"
import { UserContext } from "../../contexts/UserContext";
import { deleteUser, editUser, getAllUsers } from "../../services/users";
import type { IUserInfo } from "../../types/uset.type";
import Header from "../../components/header/Header";
import DeletModal from "../../ui/modal/DeleteModal";


const Users = () => {
      const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("AuthContext Provider is missing")
    }

    const { modalLoading, isModal, setIsModal, userInfo, setModalLoading, setUsers, deleteModal, setDelteModal, users } = userContext;

    const editUserFunc = async (data: IUserInfo) => {

        try {
            setModalLoading(true)
            await editUser(data,setFormErrors)
            const respone = await getAllUsers();
            setUsers(respone.users)
            setModalLoading(false)
            setIsModal(false)
        } catch (error) {
            setModalLoading(false)
            console.log(error);

        }

    }
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
       console.log(formErrors);
       
    return (
        <div>
            <Header titile="Users" username="Soltan Mahmudov" />
            <UsersBody users={users} />
            {
                userInfo &&
                <CustumeModal formErrors={formErrors} onSubmit={editUserFunc} initialValues={userInfo} loading={modalLoading} open={isModal} closeBtn={() => setIsModal(false)} />
            }


            <DeletModal deleteUser={deleteUserFunc} open={deleteModal} closeBtn={() => setDelteModal(false)} loading={modalLoading} />

        </div>
    )
}

export default Users
