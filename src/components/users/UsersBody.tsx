import { Table, Input, Dropdown } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllUsers, userDetail } from "../../services/users";
import { ROUTE } from "../../constants";
import type { IUserType } from "../../types/uset.type";
import styles from './css/users.module.css'
import Pagination from "../../ui/pagination/Pagination";
import { useMutation } from "@tanstack/react-query";
const PageSize = 6;
interface PropsType {
  users: IUserType[],
  isPending:boolean
}
const UserTable = ({ users, isPending }: PropsType) => {
  const [searchParams, setSearchParams] = useSearchParams();


  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const {
    setUsers,
    setLoading,
    setIsModal,
    setUserInfo,
    setModalLoading,
    setDelteModal
  } = context;

  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  const SearchPhrase = searchParams.get("SearchPhrase") || "";
  const PageNumber = parseInt(searchParams.get("PageNumber") || "1", 10);
 const [inputValue, setInputValue] = useState(SearchPhrase);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await getAllUsers({ SearchPhrase, PageNumber, PageSize });
      if (response) {
        setUsers(response.users);
        setTotal(response.totalCount);
      }

      setLoading(false);
    };

    fetchUsers();
  }, [SearchPhrase, PageNumber]);


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setSearchParams({ SearchPhrase: val });
    }, 500);
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
  ) => {
    const current = pagination.current ?? 1;

    setSearchParams({
      SearchPhrase: SearchPhrase,
      PageNumber: current.toString(),
    });
  };

  const handleDelete = async (id: string) => {
    setDelteModal(true)
    const response = await userDetail(id);
    if (response) {
      setUserInfo(response);
    }
  };

  const handleEdit = async (id: string) => {
    try {
      setModalLoading(true);
      const response = await userDetail(id);
      setModalLoading(false);
      if (response) {
        setUserInfo(response);

      }
      setIsModal(true);
    } catch (error) {
      console.log(error);
      setModalLoading(false);
    }
  };


 


  const handleView = (id: string) => {
    navigate(ROUTE.DETAILUSER.replace(":id", id));
  };

  const columns: ColumnsType<IUserType> = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
    },
    {
      title: "Əməliyyatlar",
      key: "actions",
      render: (_, record) => {
        const items = [
          {
            key: "edit",
            label: <span onClick={() => handleEdit(record.id)}>Düzəliş et</span>,
          },
          {
            key: "delete",
            label: <span onClick={() => handleDelete(record.id)}>Sil</span>,
          },
          {
            key: "view",
            label: <span onClick={() => handleView(record.id)}>Bax</span>,
          },
        ];

        return (
          <Dropdown menu={{ items }} trigger={["click"]}>
            <span style={{ cursor: "pointer", fontSize: 20, paddingLeft: "20px" }}>...</span>
          </Dropdown>
        );
      },
    },
  ];
  const onPageChange = (newPage: number) => setSearchParams({ PageNumber: newPage.toString() })
console.log(isPending,"isPending");

  return (
    <div className={styles.user_table}>
      <Input.Search
        placeholder="İstifadəçi axtar..."
        value={inputValue}
        onChange={handleSearchChange}
        style={{ marginBottom: 16, maxWidth: 300 }}
        allowClear
      />

      <Table<IUserType>
        columns={columns}
        dataSource={users}
        loading={isPending}
        rowKey="id"
        pagination={false}
        onChange={handleTableChange}
      />

      <Pagination
        currentPage={PageNumber}
        totalCount={total}
        pageSize={PageSize}
        searchPhrase={SearchPhrase}
        onPageChange={onPageChange}
      />


    </div>
  );
};

export default UserTable;
