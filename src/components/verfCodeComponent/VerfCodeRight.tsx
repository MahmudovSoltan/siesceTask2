import styles from './css/verfyComp.module.css'
import image from '../../assets/images/Group 4.svg'
const VerfCodeRight = () => {
  return (
    <div className={styles.password_image}>
      <img className={styles.image} src={image} alt="image" />
    </div>
  )
}

export default VerfCodeRight