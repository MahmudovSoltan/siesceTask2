import styles from './css/buton.module.css'

interface PropsType {
    onclick: () => void,
    titile: string
}
const BUtton = ({ onclick, titile }: PropsType) => {
    return (
        <button className={styles.button} onClick={onclick}>
            {titile}
        </button>
    )
}

export default BUtton
