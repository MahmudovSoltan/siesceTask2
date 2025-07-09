
import BUtton from "../../ui/button"
import { useState } from "react"
import TextInput from "../../ui/input/Input"
import styles from './css/passwordcomp.module.css'
interface InitialDataType {
    email: string,
}
const initialData: InitialDataType = {
    email: "",
}
const PasswordFom = () => {

    const [formData, setFormData] = useState<InitialDataType>(initialData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <form className={styles.form}>
            <TextInput
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                witdh='100%'
            />

            <div className={styles.form_btn}>
                <BUtton onclick={() => { }} titile='Submit' />
            </div>
        </form>
    )
}

export default PasswordFom