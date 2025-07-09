import React from "react";
import styles from "./css/Input.module.css"

interface TextInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?: string;
    placeholder?: string;
    witdh: string
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    name,
    type = "text",
    placeholder = "",
    witdh,
}) => {
    return (
        <div className={styles.inputWrapper} style={{ width: witdh }}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.inputField}
            />
            <label className={styles.floatingLabel}>{label}</label>
        </div>
    );
};

export default TextInput;
