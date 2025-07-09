import Logo from "../../components/logo"
import SignInLeft from "../../components/signin/SignInleft"
import SignInRight from "../../components/signin/SignInRight"

import styles from './css/signin.module.css'
const SignUp = () => {
    return (
        <div>
            <div className={styles.signin_top}>
                <Logo />
            </div>
            <div className={` container ${styles.signin_content}`}>
                <SignInLeft />
                <SignInRight />
            </div>
        </div>
    )
}

export default SignUp
