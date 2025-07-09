import Logo from '../../components/logo'
import VerfCodeLeft from '../../components/verfCodeComponent/VerfCodeLeft'
import VerfCodeRight from '../../components/verfCodeComponent/VerfCodeRight'
import styles from './css/verfy.module.css'
const VerfPassword = () => {
    return (
        <div>
            <div className={styles.verfy_top}>
                <Logo />
            </div>
            <div className={` container ${styles.verfy_content}`}>
                <VerfCodeLeft />
                <VerfCodeRight />
            </div>
        </div>
    )
}

export default VerfPassword