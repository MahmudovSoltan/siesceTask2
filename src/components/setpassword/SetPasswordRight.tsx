import styles from './css/setPasswordComp.module.css'
import image from '../../assets/images/Rectangle.svg'

const SetPasswordRight = () => {
  return (
    <div className={styles.password_image}>
      <img className={styles.image} src={image} alt="image" />
    </div>
  )
}

export default SetPasswordRight
