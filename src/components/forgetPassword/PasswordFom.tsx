
import BUtton from "../../ui/button"
import { useState } from "react"
import TextInput from "../../ui/input/Input"
import styles from './css/passwordcomp.module.css'
import { sendEmilFunc } from "../../services/auth"
import { toast } from "react-toastify"
import { ROUTE } from "../../constants"
import { useNavigate } from "react-router-dom"
import { setCookie } from "../../utils/cookie"
import type { ISenEmail } from "../../types/auth.type"

const initialData: ISenEmail = {
    email: "",
}
const PasswordFom = () => {
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<ISenEmail>(initialData)
    const navigate = useNavigate()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const user_email = formData.email
            setCookie('user_email', user_email)
            await sendEmilFunc(formData, setFormErrors)
            navigate(ROUTE.VERFY_CODE)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <form className={styles.form}>
            <TextInput
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                witdh='100%'
                error={formErrors}
            />
            <div className={styles.form_btn}>
                <BUtton onclick={handleSubmit} titile='Submit' />
            </div>
        </form>
    )
}

export default PasswordFom