import { useContext, useState } from "react";
import UsersBody from "../../components/users/UsersBody"
import CustumeModal from "../../ui/modal"
import { UserContext } from "../../contexts/UserContext";
import { deleteUser, editUser, getAllUsers } from "../../services/users";
import type { IUserInfo } from "../../types/uset.type";
import Header from "../../components/header/Header";
import DeletModal from "../../ui/modal/DeleteModal";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Spin } from "antd";


const Users = () => {
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [searchParams] = useSearchParams();
    const SearchPhrase = searchParams.get("SearchPhrase") || "";
    const PageNumber = parseInt(searchParams.get("PageNumber") || "1", 10);

    const PageSize = 6;
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("AuthContext Provider is missing")
    }

    const { modalLoading, isModal, setIsModal, userInfo, setModalLoading, deleteModal, setDelteModal } = userContext;
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ['users', SearchPhrase, PageNumber, PageSize],
        queryFn: () => getAllUsers({ SearchPhrase, PageNumber, PageSize }),
    });


    const editUserMutation = useMutation({
        mutationFn: (data: IUserInfo) => editUser(data, setFormErrors),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            setModalLoading(false);
            setIsModal(false);
            setFormErrors({});
        },
        onError: () => {
            setModalLoading(false);
        }
    });

    const deleteUserMutation = useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            setModalLoading(false);
            setDelteModal(false);
        },
        onError: () => {
            setModalLoading(false);
        }
    });



    const editUserFunc = (data: IUserInfo) => {
        setModalLoading(true);
        editUserMutation.mutate(data);
    }

    const deleteUserFunc = () => {
        if (!userInfo?.id) return;
        setModalLoading(true);
        deleteUserMutation.mutate(userInfo.id);
    }
    const closeBtn = () => {
        setFormErrors({})
        setIsModal(false)
    };





    return (
        <div>
            <Header titile="Users" />
            {
                data?.users && <UsersBody users={data?.users} isPending={isLoading} />
            }

            {
                userInfo &&
                <CustumeModal
                    formErrors={formErrors}
                    onSubmit={editUserFunc}
                    initialValues={userInfo}
                    loading={modalLoading}
                    open={isModal}
                    closeBtn={closeBtn}
                />
            }
            <DeletModal
                deleteUser={deleteUserFunc}
                open={deleteModal}
                closeBtn={() => setDelteModal(false)}
                loading={modalLoading}
            />

        </div>
    )
}

export default Users
