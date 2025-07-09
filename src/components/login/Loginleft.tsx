import SignUpOther from '../signUpOther'
import styles from './css/logincomp.module.css'
import LoginForm from './LoginForm'
const Loginleft = () => {
    return (
        <div className={` ${styles.left_container}`}>
            <h2 className={styles.titile}>
                Login

            </h2>
            <p className={styles.phargraf}>
                Login to access your travelwise  account
            </p>
            <div>
                <LoginForm />
            </div>
            <SignUpOther text='login' />
        </div>
    )
}

export default Loginleft
