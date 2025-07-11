import { useEffect, useState } from 'react'
import BUtton from '../../ui/button'
import PasswordInput from '../../ui/input/Input-Icon'
import styles from './css/setPasswordComp.module.css'

import { resetPassword } from '../../services/auth'
import { getCookie } from '../../utils/cookie'
import type { IResedPassword } from '../../types/auth.type'

const initialData: IResedPassword = {
  email: "",
  newPassword: "",
  confirmNewPassword: "",
}
const SetPasswordForm = () => {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<IResedPassword>(initialData)
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
      await resetPassword(formData, setFormErrors)
      setFormData(initialData)
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    const storedEmail = getCookie('user_email');
    if (storedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: storedEmail,
      }));
    }

  }, []);


  return (
    <form className={styles.form}>
      <PasswordInput error={formErrors} label='Create Password' name='newPassword' onChange={handleChange} value={formData.newPassword} />
      <PasswordInput error={formErrors} label='Re-enter Password' name='confirmNewPassword' onChange={handleChange} value={formData.confirmNewPassword} />
      <div className={styles.form_btn}>
        <BUtton onclick={handleSubmit} titile='Verify' />
      </div>
    </form>
  )
}

export default SetPasswordForm
