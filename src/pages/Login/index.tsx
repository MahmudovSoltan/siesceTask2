import Loginleft from '../../components/login/Loginleft'
import LoginRight from '../../components/login/LoginRight'
import Logo from '../../components/logo'
import styles from './css/login.module.css'
const Login = () => {
  return (
    <div>
      <div className={styles.login_top}>
        <Logo />
      </div>
      <div className={` container ${styles.login_content}`}>
        <Loginleft />
        <LoginRight />
      </div>
    </div>
  )
}

export default Login
