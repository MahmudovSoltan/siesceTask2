import { useState } from 'react'
import BUtton from '../../ui/button'
import styles from './css/logincomp.module.css'
import PasswordInput from '../../ui/input/Input-Icon'
import TextInput from '../../ui/input/Input'
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../../constants'

interface InitialDataType {
    email: string,
    password: string,
}
const initialData: InitialDataType = {
    email: "",
    password: "",
}
const LoginForm = () => {
    const [formData, setFormData] = useState<InitialDataType>(initialData)
    const navigate = useNavigate()
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

            <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
                <BUtton onclick={() => { }} titile='Login' />
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