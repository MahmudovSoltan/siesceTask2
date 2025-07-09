import ForgetPasswordLeft from '../../components/forgetPassword/ForgetPasswordLeft'
import ForgetPasswordRight from '../../components/forgetPassword/ForgetPasswordRight'
import Logo from '../../components/logo'
import styles from './css/forgetpassword.module.css'
const ForgetPassword = () => {
    return (
        <div>
            <div className={styles.password_top}>
                <Logo />
            </div>
            <div className={` container ${styles.password_content}`}>
                <ForgetPasswordLeft />
                <ForgetPasswordRight />
            </div>
        </div>
    )
}

export default ForgetPassword