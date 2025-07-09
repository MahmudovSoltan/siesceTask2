import Logo from '../../components/logo'
import SetPasswordLeft from '../../components/setpassword/SetPasswordLeft'
import SetPasswordRight from '../../components/setpassword/SetPasswordRight'
import styles from './css/setpassword.module.css'
const SetPassword = () => {
  return (
    <div>
      <div className={styles.setpassword_top}>
        <Logo />
      </div>
      <div className={` container ${styles.setpassword_content}`}>
        <SetPasswordLeft />
        <SetPasswordRight />
      </div>
    </div>
  )
}

export default SetPassword