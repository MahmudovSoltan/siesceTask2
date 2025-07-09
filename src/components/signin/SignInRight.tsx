import SignUpOther from '../signUpOther'
import styles from './css/signincomp.module.css'
import SignInForm from './SignInForm'
const SignInRight = () => {
    return (
        <div className={` ${styles.right_container}`}>
            <h2 className={styles.titile}>
                Sign up
            </h2>
            <p className={styles.phargraf}>
                Let’s get you all st up so you can access your personal account.
            </p>
            <div>
                <SignInForm />
            </div>
            <SignUpOther   text={"Sign up"} />
        </div>
    )
}

export default SignInRight