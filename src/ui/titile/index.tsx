import styles from './css/titile.module.css'
interface PropsType {
    titile: string
}
const Titile = ({ titile }: PropsType) => {
    return (
        <h2 className={styles.titile}>
            {titile}
        </h2>
    )
}

export default Titile
