import React from "react";
import styles from "./css/Input.module.css"

interface TextInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?: string;
    placeholder?: string;
    witdh: string,
    error: any;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    name,
    type = "text",
    placeholder = "",
    witdh,
    error
}) => {
    const inputName = name.toLowerCase()
    return (
        <>
            <div className={styles.inputWrapper} style={{ width: witdh }}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${styles.inputField} ${error?.[inputName] ? styles.inputError : ""}`}
                />
                <label className={styles.floatingLabel}>{label}</label>
                {error?.[inputName] && (
                    <div className={styles.errorAbsolute}>{error[inputName]?.slice(0,44)}</div>
                )}
            </div>
        </>
    );
};

export default TextInput;
