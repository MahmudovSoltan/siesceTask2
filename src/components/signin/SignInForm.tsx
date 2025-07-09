import { useState } from 'react'
import TextInput from '../../ui/input/Input'
import PasswordInput from '../../ui/input/Input-Icon'
import styles from './css/signincomp.module.css'
import BUtton from '../../ui/button'
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../../constants'
interface InitialDataType {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    confirmPassword: string,
}
const initialData: InitialDataType = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    confirmPassword: "",
}
const SignInForm = () => {
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
            <div className={styles.form_inputs}>
                <TextInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    witdh='308px'
                />
                <TextInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    witdh='308px'
                />
            </div>
            <div className={styles.form_inputs}>
                <TextInput
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    witdh='308px'
                />
                <TextInput
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    witdh='308px'
                />
            </div>

            <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />

            <div className={styles.form_accept}>
                <div>
                    <input type="checkbox" />
                </div>
                <p className={styles.form_text}>
                    I agree to all the <span>Terms</span> and <span>Privacy Policies</span>
                </p>
            </div>
            <div className={styles.form_btn}>
                <BUtton onclick={() => { }} titile='Create account' />
            </div>

            <div className={styles.form_bottom_text}>
                <p className={styles.form_text}>
                    Already have an account? <span onClick={() => navigate(ROUTE.LOGIN)}>Login</span>
                </p>
            </div>
        </form>
    )
}

export default SignInForm
