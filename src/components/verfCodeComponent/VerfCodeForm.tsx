import { useState, useEffect } from "react";
import BUtton from "../../ui/button";
import PasswordInput from "../../ui/input/Input-Icon";
import styles from "./css/verfyComp.module.css";
import { sendEmilFunc, vefCodeFUnc } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { ROUTE } from "../../constants";
import { toast } from "react-toastify";

interface InitialDataType {
  email: string;
  code: string;
}
const initialData: InitialDataType = {
  email: "",
  code: "",
};

const VerfCodeForm = () => {
  const [formData, setFormData] = useState<InitialDataType>(initialData);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate()
  useEffect(() => {
    const storedEmail = getCookie('user_email')

    if (storedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: storedEmail,
      }));
    }

  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await vefCodeFUnc(formData, setFormErrors)
      navigate(ROUTE.SETPASSWOD)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setFormData(initialData)
    if (formErrors.general) {
      toast.error(formErrors.general)
    }

  };
  const resendCode = async () => {

    try {
      const user_email = getCookie('user_email')
      if (user_email) {
        await sendEmilFunc({ email: user_email }, setFormErrors)
      }

    } catch (error) {
      console.log(error);
    }

  }

  console.log(formErrors, "formErrors");

  return (
    <div>
      <form className={styles.form}>
        <PasswordInput
          label="Enter Code"
          name="code"
          onChange={handleChange}
          value={formData.code}
          error={formErrors}
        />
        <p className={styles.form_text}>
          Didn’t receive a code? <span onClick={resendCode}>Resend</span>
        </p>
        <div className={styles.form_btn}>
          <BUtton titile="Verify" onclick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default VerfCodeForm;
