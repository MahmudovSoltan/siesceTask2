import { useContext, useState } from 'react'
import BUtton from '../../ui/button'
import styles from './css/logincomp.module.css'
import PasswordInput from '../../ui/input/Input-Icon'
import TextInput from '../../ui/input/Input'
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../../constants'
import { loginFunc } from '../../services/auth'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

interface InitialDataType {
    email: string,
    password: string,
}
const initialData: InitialDataType = {
    email: "",
    password: "",
}

const LoginForm = () => {
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<InitialDataType>(initialData)
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw new Error("AuthContext Provider is missing")
    }

    const { login, loading, setLoading } = authContext

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formErrors.general) {
            toast.error(formErrors.general)
        }
        try {
            setLoading(true)
            const response  = await loginFunc(formData, setFormErrors)
            if (response) {
                login(response)     
            }
            setLoading(false)
            setFormData(initialData)
            navigate(ROUTE.USERS)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }

    }


    return (
        <form className={styles.form} >
            <TextInput
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                witdh='100%'
                error={formErrors}
            />

            <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors}
            />

            <div className={styles.check_box}>
                <div className={styles.form_accept}>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <p className={styles.form_text}>
                        Remember me
                    </p>
                </div>
                <div className={styles.forget_password} onClick={() => navigate(ROUTE.FORGETPASSWORD)}>
                    Forgot Password
                </div>
            </div>

            <div className={styles.form_btn}>
                <BUtton loading={loading} titile='Login' onclick={handleSubmit} />
            </div>

            <div className={styles.form_bottom_text}>
                <p className={styles.form_text}>
                    Don’t have an account? <span onClick={() => navigate(ROUTE.REGISTER)}> Sign up</span>
                </p>
            </div>
        </form>
    )
}

export default LoginForm
