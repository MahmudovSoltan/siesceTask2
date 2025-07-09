import logo from '../../assets/images/logo.svg'
import styles from './css/logo.module.css'
const Logo = () => {
    return (
        <div className={styles.logo_container}>
            <img src={logo} alt="logo" />
            <h1 className={styles.logo_title}>Your Logo</h1>
        </div>
    )
}

export default Logo