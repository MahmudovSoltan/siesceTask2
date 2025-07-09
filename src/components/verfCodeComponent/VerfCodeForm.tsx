import { useState } from 'react'
import BUtton from '../../ui/button'
import PasswordInput from '../../ui/input/Input-Icon'
import styles from './css/verfyComp.module.css'



const VerfCodeForm = () => {
  const [formData, setFormData] = useState<string>('')

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  return (
    <div>
      <form className={styles.form}>
        <PasswordInput label='Enter Code' name='password' onChange={handleChange} value={formData} />
        <p className={styles.form_text}>
          Didn’t receive a code? <span>Resend</span>
        </p>
        <div className={styles.form_btn}>
          <BUtton onclick={() => { }} titile='Verify' />
        </div>
      </form>
    </div>
  )
}

export default VerfCodeForm
