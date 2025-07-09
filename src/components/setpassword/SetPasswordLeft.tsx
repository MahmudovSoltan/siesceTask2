
import styles from './css/setPasswordComp.module.css'
import SetPasswordForm from './SetPasswordForm'

const SetPasswordLeft = () => {

  return (
    <div>
      <div className={` ${styles.left_container}`}>
        <h2 className={styles.titile}>
          Set a password
        </h2>
        <p className={styles.phargraf}>
          Your previous password has been reseted. Please set a new password for your account.
        </p>
        <div>
          <SetPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default SetPasswordLeft
