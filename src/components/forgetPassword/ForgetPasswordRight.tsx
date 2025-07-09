import image from '../../assets/images/Rectangle.svg'
import styles from './css/passwordcomp.module.css'
const ForgetPasswordRight = () => {
    return (
        <div className={styles.password_image}>
            <img className={styles.image} src={image} alt="image" />
        </div>
    )
}

export default ForgetPasswordRight