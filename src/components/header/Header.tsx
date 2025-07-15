import React from "react"
import styles from "./css/header.module.css"
import { deleteCookie } from "../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { ROUTE } from "../../constants"

interface HeaderProps {
  username: string
  titile:string
}

const Header: React.FC<HeaderProps> = ({ username,titile }) => {
    const navigate = useNavigate()
    const onLogout =()=>{
        deleteCookie("accessToken")
        deleteCookie("refresh_token")
        navigate(ROUTE.LOGIN)
    }
  return (
    <header className={styles.container}>
      <div className={styles.title}>{titile}</div>

      <div className={styles.right}>
        <span className={styles.username}>{username}</span>
        <button className={styles.logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
