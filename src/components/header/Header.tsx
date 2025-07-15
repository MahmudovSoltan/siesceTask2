import React, { useEffect, useState } from "react"
import styles from "./css/header.module.css"
import { deleteCookie } from "../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { ROUTE } from "../../constants"
import { userInfo } from "../../services/users"

interface HeaderProps {
  titile: string
}
interface StateType {
  email: string,
  fullname: string,
  id: string
}
const Header: React.FC<HeaderProps> = ({ titile }) => {
  const [user, setUser] = useState<StateType | null>(null)
  const navigate = useNavigate()
  const onLogout = () => {
    deleteCookie("accessToken")
    deleteCookie("refresh_token")
    navigate(ROUTE.LOGIN)
  }
  useEffect(() => {
    const userInfoFUnc = async () => {
      const response = await userInfo()
      setUser(response)
    }

    userInfoFUnc()
  }, [])


  return (
    <header className={styles.container}>
      <div className={styles.title}>{titile}</div>

      <div className={styles.right}>
        <span className={styles.username}>{user?.fullname}</span>
        <button className={styles.logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
