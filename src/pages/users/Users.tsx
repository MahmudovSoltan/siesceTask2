import { useContext } from "react";
import UsersBody from "../../components/users/UsersBody"
import CustumeModal from "../../ui/modal"
import { UserContext } from "../../contexts/UserContext";
import { editUser, getAllUsers } from "../../services/users";
import type { IUserInfo } from "../../types/uset.type";

const Users = () => {
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("AuthContext Provider is missing")
    }

    const { modalLoading, isModal, setIsModal, userInfo, setModalLoading,setUsers  } = userContext;

    const editUserFunc = async (data: IUserInfo) => {

        try {
            setModalLoading(true)
            await editUser(data)
            const respone = await getAllUsers();
            setUsers(respone.users)
            setModalLoading(false)
            setIsModal(false)
        } catch (error) {
            setModalLoading(false)
            console.log(error);

        }

    }
    console.log(userInfo, "CustomModal");

    return (
        <div>
            <UsersBody   />
            {
                userInfo &&
                <CustumeModal onSubmit={editUserFunc} initialValues={userInfo} loading={modalLoading} open={isModal} closeBtn={() => setIsModal(false)} />
            }
        </div>
    )
}

export default Users
