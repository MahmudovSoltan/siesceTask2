import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userDetail } from "../../services/users";
import { UserContext } from "../../contexts/UserContext";
import styles from "./css/UserDetailPage.module.css";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const UserDetailPage = () => {
  const { id } = useParams();

  const userContext = useContext(UserContext)

  if (!userContext) {
    throw new Error("AuthContext Provider is missing")
  }

  const { userInfo, loading, setUserInfo, setLoading } = userContext;

  useEffect(() => {
    const getUserFunc = async () => {
      setLoading(true)
      if (id) {
        const response = await userDetail(id);
        setUserInfo(response);
        setLoading(false)
      }
    };
    getUserFunc();
  }, [id, setUserInfo]);

  if (loading || !userInfo) {
    return <div className={styles.loading}><Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /></div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>İstifadəçi Məlumatları</h2>
      <div className={styles.infoGrid}>
        <div><strong>Ad:</strong> {userInfo.firstName}</div>
        <div><strong>Soyad:</strong> {userInfo.lastName}</div>
        <div><strong>Email:</strong> {userInfo.email}</div>
        <div><strong>Telefon:</strong> {userInfo.phoneNumber}</div>
        <div><strong>Email Təsdiqi:</strong> {userInfo.emailConfirmed ? "Bəli" : "Xeyr"}</div>
        <div><strong>Yaradılma tarixi:</strong>   {
          userInfo?.createdAt && new Date(userInfo.createdAt).toLocaleString()
        }</div>
        <div><strong>ID:</strong> {userInfo.id}</div>
      </div>
    </div>
  );
};

export default UserDetailPage;
