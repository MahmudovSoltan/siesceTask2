import React, { useState } from "react";
import styles from "./css/Input.module.css";
import EyeIcon from '../../assets/icons/eye.svg?react'
import EyeOfIcon from '../../assets/icons/eye-off.svg?react'
interface PasswordInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    error: any
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    value,
    onChange,
    name,
    error
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputName = name.toLowerCase()


    return (
        <>
            <div className={styles.inputWrapper}>
                <input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder=" "
                    className={`${styles.inputField} ${error?.[inputName] ? styles.inputError : ""}`}
                />
                <label className={styles.floatingLabel}>{label}</label>
                <button
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ?
                        <EyeIcon />
                        :
                        <EyeOfIcon />
                    }
                </button>
                {error?.[inputName] && (
                    <div className={styles.errorAbsolute}>{error[inputName]?.slice(0, 45)}</div>
                )}
            </div>
        </>
    );
};

export default PasswordInput;
