import { useNavigate } from 'react-router-dom'
import SignUpOther from '../signUpOther'
import styles from './css/passwordcomp.module.css'
import PasswordFom from './PasswordFom'
import { ROUTE } from '../../constants'
const ForgetPasswordLeft = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.forget_password_left_container}>
            <div className={styles.go_back} onClick={() => navigate(ROUTE.LOGIN)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 18.75L9 12L15.75 5.25" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back to login
            </div>
            <div className={` ${styles.left_container}`}>
                <h2 className={styles.titile}>
                    Forgot your password?
                </h2>
                <p className={styles.phargraf}>
                    Don’t worry, happens to all of us. Enter your email below to recover your password
                </p>
                <div>
                    <PasswordFom />
                </div>
                <SignUpOther text='login' />
            </div>
        </div>
    )
}

export default ForgetPasswordLeft