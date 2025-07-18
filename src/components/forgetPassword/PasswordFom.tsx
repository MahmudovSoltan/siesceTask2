
import BUtton from "../../ui/button"
import { useContext, useState } from "react"
import TextInput from "../../ui/input/Input"
import styles from './css/passwordcomp.module.css'
import { sendEmilFunc } from "../../services/auth"
import { ROUTE } from "../../constants"
import { useNavigate } from "react-router-dom"
import { setCookie } from "../../utils/cookie"
import type { ISenEmail } from "../../types/auth.type"
import { AuthContext } from "../../contexts/AuthContext"

const initialData: ISenEmail = {
    email: "",
}
const PasswordFom = () => {
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<ISenEmail>(initialData)
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw new Error("AuthContext Provider is missing")
    }

    const { loading, setLoading } = authContext
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
            setLoading(true)
            const user_email = formData.email
            setCookie('user_email', user_email)
            await sendEmilFunc(formData, setFormErrors)
            setLoading(false)
            navigate(ROUTE.VERFY_CODE)
        } catch (error) {
            setLoading(false)
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
                <BUtton loading={loading} onclick={handleSubmit} titile='Submit' />
            </div>
        </form>
    )
}

export default PasswordFom