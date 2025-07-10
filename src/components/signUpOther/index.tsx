import styles from './css/signupother.module.css'
import Facebook from '../../assets/icons/facebook.svg?react'
import AppleIcon from '../../assets/icons/apple.svg?react'
import GoogleIcon from '../../assets/icons/gogle.svg?react'
interface PropsType {
    text: string
}
const SignUpOther = ({ text }: PropsType) => {
    return (
        <div>
            <div className={styles.signup_other}>
                <span></span>
                <p>
                    Or {text} with
                </p>
                <span></span>
            </div>
            <div className={styles.other_cards}>
                <div className={styles.other_card}>

                    <Facebook color='#1877F2' />
                </div>
                <div className={styles.other_card}>


                    <GoogleIcon />

                </div>
                <div className={styles.other_card}>


                    <AppleIcon color='#313131' />

                </div>
            </div>
        </div>
    )
}

export default SignUpOther