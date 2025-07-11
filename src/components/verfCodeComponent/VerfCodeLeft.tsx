import { useNavigate } from 'react-router-dom'
import styles from './css/verfyComp.module.css'
import { ROUTE } from '../../constants'
import VerfCodeForm from './VerfCodeForm'
import BackIcon from '../../assets/icons/back.svg?react'
const VerfCodeLeft = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={` ${styles.left_container}`}>
                <div className={styles.go_back} onClick={() => navigate(ROUTE.LOGIN)}>
                    <BackIcon />
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