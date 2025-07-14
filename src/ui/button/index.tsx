import styles from './css/buton.module.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
interface PropsType {
    onclick: (e: React.FormEvent) => void,
    titile: string,
    loading: boolean
}
const BUtton = ({ onclick, titile, loading }: PropsType) => {
    return (
        <button disabled={loading} className={styles.button} onClick={onclick}>
            {
                loading ? <Spin indicator={<LoadingOutlined spin />} size="large" /> : titile
            }


        </button>
    )
}

export default BUtton
