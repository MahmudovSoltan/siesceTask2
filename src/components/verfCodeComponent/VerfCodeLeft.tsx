import { useNavigate } from 'react-router-dom'
import styles from './css/verfyComp.module.css'
import { ROUTE } from '../../constants'
import VerfCodeForm from './VerfCodeForm'
const VerfCodeLeft = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={` ${styles.left_container}`}>
                <div className={styles.go_back} onClick={() => navigate(ROUTE.LOGIN)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 18.75L9 12L15.75 5.25" stroke="#313131" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Back to login
                </div>
                <h2 className={styles.titile}>
                    Verify code
                </h2>
                <p className={styles.phargraf}>
                    An authentication code has been sent to your email.
                </p>
                <div>
                    <VerfCodeForm />
                </div>
            </div>
        </div>
    )
}

export default VerfCodeLeft