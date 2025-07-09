import { useState } from 'react'
import BUtton from '../../ui/button'
import PasswordInput from '../../ui/input/Input-Icon'
import styles from './css/setPasswordComp.module.css'
interface InitialDataType {
    createpassword: string,
    reEnterPassword: string,
}
const initialData: InitialDataType = {
    createpassword: "",
    reEnterPassword: "",
}
const SetPasswordForm = () => {
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
      <PasswordInput label='Create Password' name='createpassword' onChange={handleChange} value={formData.createpassword} />
      <PasswordInput label='Re-enter Password' name='reEnterPassword' onChange={handleChange} value={formData.reEnterPassword} />
      <div className={styles.form_btn}>
        <BUtton onclick={() => { }} titile='Verify' />
      </div>
    </form>
  )
}

export default SetPasswordForm
